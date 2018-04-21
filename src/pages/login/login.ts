import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiseModule } from '../../modules/user_mdl.component';
import { User } from '../../models/user.model';
import { HomePage } from '../home/home';
import { SignInPage } from '../sign-in/sign-in';

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
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      key_entry: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  //this.editTaskForm.
  onSubmit({ value }){
    this.login(value);
  }

  private login(value){
    this.userServiseModule.login(value)
    .subscribe(
      response => {
        if (response) {
          if(response.status){
            // console.log(response);
            // console.log(value);
            this.userServiseModule.setUserInLocalStorage(value)
            // console.log(JSON.stringify(response));
            this.navCtrl.setRoot(HomePage);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onSignIn(){
    let modal = this.modalCtrl.create(SignInPage);
    modal.present();
  }
}
