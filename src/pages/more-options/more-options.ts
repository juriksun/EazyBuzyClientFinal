import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { TasksServiseModule } from '../../modules/tasks_mdl.component';
import { HomePage } from '../home/home';

/**
 * Generated class for the MoreOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more-options',
  templateUrl: 'more-options.html',
})
export class MoreOptionsPage {
  private editTaskForm: FormGroup;
  private taskId: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private tasksServiseModule: TasksServiseModule
  ) {}

  ngOnInit(){
    this.editTaskForm = this.navParams.get('newTaskForm');
    this.taskId = this.navParams.get('taskId');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreOptionsPage');
  }

  onDelete(){
    this.viewCtrl.dismiss('delete');
  }

  onShare(){

  }

  onEdit(){
    // this.editTaskForm.enable();
    this.viewCtrl.dismiss('edit');
  }
}
