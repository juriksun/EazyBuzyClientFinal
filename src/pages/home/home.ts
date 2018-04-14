import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AlexPage } from '../alex/alex';
import { AddNewTaskPage } from '../add-new-task/add-new-task';
import { TasksServiseModule } from '../../modules/tasks_mdl.component';
import { Task } from '../../models/task.model';
import { EditTaskPage } from '../edit-task/edit-task';
import { CreateRoutePage } from '../create-route/create-route';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    tasks: any[] = [{"_id":"5ad1c4bb09e8da334c353707","user_token_id":"5ad1b576734d1d08b02157ce","name":"leumi","type":"bank","task_place":{"_id":"5ad1c4bb09e8da334c353708","place_type":"bank","place_key_word":"leumi"},"location":{"_id":"5ad1eb7f8ff4bf422035d431"},"__v":0},{"_id":"5ad1c54809e8da334c353709","user_token_id":"5ad1b576734d1d08b02157ce","name":"clalit","type":"pharmacy","task_place":{"_id":"5ad1c54809e8da334c35370a","place_type":"pharmacy","place_key_word":"clalit"},"time":{"_id":"5ad1eb7f8ff4bf422035d433","start_time":"18:12"},"__v":0}];
  constructor(
    public navCtrl: NavController,
    public tasksServiseModule: TasksServiseModule,
    public modalCtrl: ModalController
  ) {}

  onTask(task){
    this.navCtrl.push(EditTaskPage,task);
  }
  onAddTask(){
    this.navCtrl.push(AddNewTaskPage);
  }

  ngOnInit(){
    // this.getAllTasks();
  }
  private getAllTasks(){
    this.tasksServiseModule.getAllTasks('alex','djura')
      .subscribe(
        response  =>{
          if(response){
            this.tasks = response.tasks;
            console.log(JSON.stringify(response));
          }
        },
        error =>{
          console.log(error);
        }
      )
  }

  onCreateRoute() {
    let modal = this.modalCtrl.create(CreateRoutePage);
    modal.present();
  }
}