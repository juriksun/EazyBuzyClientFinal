import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiseModule } from '../../modules/user_mdl.component';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  signInForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    public userServiseModule: UserServiseModule,
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SignInPage');
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  //this.editTaskForm.
  onSubmit({ value }){
    this.signIn(value);
  }

  private signIn(value){
    this.userServiseModule.signIn(value)
    .subscribe(
      response => {
        if (response) {
          if(response.status){
            // console.log(response);
            // console.log(value);
            this.userServiseModule.serLastUserInLocalStorage(
              {
                key_entry: value.email,
                password: value.password
              }
            );
            // console.log(JSON.stringify(response));
            // this.navCtrl.setRoot(HomePage);
            this.viewCtrl.dismiss();
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  onDiscard(){
    this.viewCtrl.dismiss();
  }
}
