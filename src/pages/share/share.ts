import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ShareServiseModule } from '../../modules/share_mdl.component';
import { EventServiceModule } from '../../modules/event_mdl.component';
import { HomePage } from '../home/home';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {
  @ViewChild("userName") userName;

  public shareForm: FormGroup;
  private taskId: string;
  private username: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private shareServiseModule: ShareServiseModule,
    private eventServiceModule: EventServiceModule,
    private alertCtrl: AlertController
  ) {
    this.initializeTaskForm();
  }

  ionViewDidEnter(){
    setTimeout(() => {
      this.userName.setFocus();
    }, 150);
    this.taskId = this.navParams.get('task_id');
    // console.log('this.taskId:',this.taskId);
  }

  ionViewDidLoad() {

    
  }

  onDiscard(){
    this.navCtrl.pop();
  }

  initializeTaskForm(){
    this.shareForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]]});
  }

  onShare({ value }){
    this.username = value.username;
    this.shareServiseModule.setNewShareRequest(
      this.taskId,
      this.username
    ).subscribe(
      response => {
        if(response){
          if(response.status){
            this.eventServiceModule.createEventMessage({message : response.message, status : response.status});
            this.navCtrl.setRoot(HomePage);
          } else {
            this.showPrompt(response.error);
          } 
        }
        else{
          this.showPrompt('Server problem. Try again later.');
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

  showPrompt(message) {
    let promt = this.alertCtrl.create({
      title: `error share to \"${this.username}\"`,
      message: message,
      buttons: [
        {
          text: 'ok',
          handler: () => {
          }
        }
      ]
    });
    promt.present();
  }
}
