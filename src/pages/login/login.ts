import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, ModalController, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiseModule } from '../../modules/user_mdl.component';
import { User } from '../../models/user.model';
import { HomePage } from '../home/home';
import { SignInPage } from '../sign-in/sign-in';
import { EventServiceModule}  from '../../modules/event_mdl.component';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ShareServiseModule } from '../../modules/share_mdl.component';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    public userServiseModule: UserServiseModule,
    // public viewCtrl: ViewController,
    private modalCtrl: ModalController,
    public eventServiceModule: EventServiceModule,
    public toastCtrl: ToastController,
    private shareServiseModule: ShareServiseModule,
    private menu: MenuController
  ) {
  }

  ionViewWillEnter(){
    this.menu.enable(false, 'menu1');
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      key_entry: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit({ value }){
    this.login(value);
  }

  private login(value){
    this.userServiseModule.login(value)
    .subscribe(
      response => {
        if (response) {
          if(response.status){
            this.userServiseModule.setUserInLocalStorage({
              key_entry: value.key_entry,
              password: value.password,
              image_profile: response.user.image_profile,
              first_name: response.user.first_name,
              last_name: response.user.last_name,
              email: response.user.email
            }
            );
            this.shareServiseModule.onSubscribeShareTasks();
            this.shareServiseModule.onGetAllShareTasks();
            this.menu.enable(true, 'menu1');
            this.navCtrl.setRoot(HomePage);
          }
          this.eventServiceModule.createEventMessage({message : response.message, status : response.status});
        }else{
          this.eventServiceModule.createEventMessage({message : "Error - response is undifined", status : false});
        }
      },
      error => {
        console.log(error);
        this.eventServiceModule.createEventMessage({message : "Error - problem with server", status : false});
      }
    );
  }

  onSignIn(){
    let modal = this.modalCtrl.create(SignInPage);
    modal.present();
  }
}
