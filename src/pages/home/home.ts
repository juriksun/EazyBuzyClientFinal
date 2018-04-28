import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AlexPage } from '../alex/alex';
import { TasksServiseModule } from '../../modules/tasks_mdl.component';
import { Task } from '../../models/task.model';
import { CreateRoutePage } from '../create-route/create-route';
import { LoginPage } from '../login/login';
import { UserServiseModule } from '../../modules/user_mdl.component';
import { RouteListPage } from '../route-list/route-list';
import { RouteDetailsPage } from '../route-details/route-details';
import { TaskPage } from '../task/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    tasks: Task[];

    constructor(
      public navCtrl: NavController,
      public tasksServiseModule: TasksServiseModule,
      public modalCtrl: ModalController,
      public userServiseModule: UserServiseModule
  ) {
    
  }

  onTask(task){
    this.navCtrl.push(TaskPage, task);
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
    
    this.tasksServiseModule.getAllTasks()
      .subscribe(
        response  =>{
          if(response){
            this.tasks = response.tasks;
            //console.log(JSON.stringify(response));
          }
        },
        error =>{
          console.log(error);
        }
      )
  }

  onCreateRoute() {
    this.navCtrl.push(CreateRoutePage);
    // let modal = this.modalCtrl.create(CreateRoutePage);
    // modal.present();
  }

  onAddTask(){
    this.navCtrl.push(TaskPage);
  }

  onListRoute(){
    this.navCtrl.setRoot(RouteDetailsPage);
  }
}