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
// import { StatusMessagePage } from '../status-message/status-message';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { EventServiceModule}  from '../../modules/event_mdl.component';

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
      public userServiseModule: UserServiseModule,
      public eventServiceModule: EventServiceModule,
      public toastCtrl: ToastController
  ) {
    
  }

  onTask(task){
    this.navCtrl.push(TaskPage, {task: task});
  }

  ionViewWillEnter(){
    this.getUserTasks();
  }

  ngOnInit(){
    // this.getUserTasks();
  }

  getUserTasks(){
    this.tasksServiseModule.onGetAllTasks();
    //this.getAllTasks();
  }

  private getAllTasks(){
    // setTimeout(()=> 
    this.tasksServiseModule.getAllTasks()
      .subscribe(
        response => {
          if(response){
            this.tasksServiseModule.tasks = response.tasks;
            this.tasks = response.tasks;
            // console.log(JSON.stringify(response));
          }else {
            this.eventServiceModule.createEventMessage({message : "Error - response is undifined", status : false});
          }
        },
        error =>{
          console.log(error);
          this.eventServiceModule.createEventMessage({message : "Error - problem with server", status : false});
        }
      )
    // ,1000)
    
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
    this.navCtrl.push(RouteDetailsPage);
  }

  // ionViewDidEnter(msg){
  //   let toast = this.toastCtrl.create({
  //     message: 'User was added successfully 11',
  //     duration: 2000,
  //     cssClass : 'toast-sucess'
  //   });
  //   toast.present();
  // }
}