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
  public shareStatus: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private tasksServiseModule: TasksServiseModule
  ) {}

  ngOnInit(){
    this.shareStatus = this.navParams.get('share_status');
    this.editTaskForm = this.navParams.get('newTaskForm');
    this.taskId = this.navParams.get('taskId');
    console.log(this.shareStatus);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreOptionsPage');
  }

  onDelete(){
    this.viewCtrl.dismiss('delete');
  }

  onShare(){
    this.viewCtrl.dismiss('share');
  }

  onEdit(){
    this.viewCtrl.dismiss('edit');
  }

  onUnshare(){
    this.viewCtrl.dismiss('unshare');
  }

  onApply(){
    this.viewCtrl.dismiss('apply');
  }

  onCancel(){
    this.viewCtrl.dismiss('cancel');
  }
}
