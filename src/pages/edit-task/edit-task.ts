import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksServiseModule } from '../../modules/tasks_mdl.component';
import { Task } from '../../models/task.model';

/**
 * Generated class for the EditTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskPage {
  task: Task;
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
    this.task = this.navParams.data;
    this.newTaskForm = this.fb.group({
      name: [this.task.name , [Validators.required, Validators.minLength(4)]],
      type: [this.task.type, [Validators.required, Validators.minLength(4)]],
      time_start: [(this.task.time)?(this.task.time.start_time || ''):''],
      time_end: [(this.task.time)?(this.task.time.duration || ''):''],
      priorety: [''],
      place: ['', [Validators.minLength(4)]],
      shered_to: ['', [Validators.minLength(4)]]
    });

    this.newTaskForm.disable();
  }
  onSubmit({ value }){
    this.newTaskForm.enable();
    //console.log(value);
    // this.addNewTask(value);
  }

  private addNewTask(value){
    
    this.tasksServiseModule.addNewTask(
      {
        username:"alex",
        password: "djura"
      },
      value
    )
      .subscribe(
        response  =>{
          if(response){
            console.log(JSON.stringify(response));
          }
        },
        error =>{
          console.log(error);
        }
      )
  }
}
