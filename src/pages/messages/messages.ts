import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { EventServiceModule } from '../../modules/event_mdl.component';
import { TaskPage } from '../task/task';
import { ShareServiseModule } from '../../modules/share_mdl.component';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public eventServiceModule: EventServiceModule,
    public toastCtrl: ToastController,
    public shareServiseModule: ShareServiseModule
) {
  
}

onTask(task){
  this.navCtrl.push(TaskPage, {
    task: task,
    username: task.share_from
  });
}

ionViewWillEnter(){
  this.getUserTasks();
}

ngOnInit(){
  // this.getUserTasks();
}

getUserTasks(){
  this.getAllTasks();
}

private getAllTasks(){
  // setTimeout(()=> 
}
}
