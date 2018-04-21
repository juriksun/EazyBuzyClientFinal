import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskResponse } from '../../models/tasks-response.model';
import { TasksServiseModule } from '../../modules/tasks_mdl.component';
import { HomePage } from '../home/home';
/**
 * Generated class for the AddNewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-task',
  templateUrl: 'add-new-task.html',
})
export class AddNewTaskPage {
  newTaskForm: FormGroup;
  alex;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    public tasksServiseModule: TasksServiseModule
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewTaskPage');
  }
  ngOnInit() {
    this.newTaskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      type: ['', [Validators.required, Validators.minLength(4)]],
      time_start: [''],
      time_end: [''],
      priorety: [''],
      place: ['', [Validators.minLength(4)]],
      shered_to: ['', [Validators.minLength(4)]]
    });
  }
  onSubmit({ value }){
    //console.log(value);
    this.addNewTask(value);
  }

  private addNewTask(value){
    
    this.tasksServiseModule.addNewTask(value)
    .subscribe(
      response  =>{
        if(response){
          console.log(JSON.stringify(response));
        }
      },
      error =>{
        console.log(error);
      }
    );
    
    this.navCtrl.pop();
  }
}
