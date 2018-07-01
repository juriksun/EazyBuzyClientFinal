import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { TaskResponse } from "../models/tasks-response.model";
import { User } from "../models/user.model";
import { UserServiseModule } from "./user_mdl.component";
import { Url } from "../models/url.model";
import { Task } from "../models/task.model";
import { EventServiceModule } from "./event_mdl.component";
import { TasksServiseModule } from "./tasks_mdl.component";

@Injectable()
export class ShareServiseModule{
    public sharedWithMeTasks: any[] = [];
    // private url: string = 'http://localhost:3000/';
    public subscribeHendel;
  private url: string = 'https://eazy-buzy-server.herokuapp.com/';

  constructor(
    private http: Http,
    private userServiseModule: UserServiseModule,
    private eventServiceModule: EventServiceModule,
    private tasksServiseModule: TasksServiseModule
  ) {}

  onGetAllShareTasks(){
    this.getAllShareTasks().subscribe(
        response => {
          if(response){
            if(response.response.status_new){
              this.eventServiceModule.createEventMessage({message : 'Share - You have new shared task', status : response.status});
              this.eventServiceModule.numOfNot ++;
            }
            this.sharedWithMeTasks = response.response.tasks;
          } else {
            this.eventServiceModule.createEventMessage({message : "Error - response is undifined", status : false});
          }
        },
        error =>{
            this.eventServiceModule.createEventMessage({message : "Error - problem with server", status : false});
          console.log(error);
        }
      );
  }

  stopSubscribeShareTasks(){
    clearInterval(this.subscribeHendel);
  }

  onSubscribeShareTasks(){
    this.subscribeHendel = setInterval(() => {
        this.getSubscribeShareTasks().subscribe(
            response => {
              if(response){
                if(response.response && response.response.status_new !== 0){
                    if(response.response.status_new > 0){
                        this.eventServiceModule.createEventMessage({message : 'Share - You have new shared task', status : response.status});
                        this.sharedWithMeTasks = response.response.tasks;
                        this.eventServiceModule.numOfNot ++;
                    } else {
                        this.sharedWithMeTasks = response.response.tasks;

                    }
                }
                this.tasksServiseModule.onGetAllTasks();
              }
            },
            error =>{
              console.log(error);
            }
          );
    }, 15000);
  }

  getAllShareTasks():Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}get_all_share_tasks`,
        {
            username: this.userServiseModule.getUserFromLocalStorege().key_entry,
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  getSubscribeShareTasks():Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}get_subscribe_share_tasks`,
        {
            username: this.userServiseModule.getUserFromLocalStorege().key_entry,
            tasks_id: JSON.stringify(this.getSharedWithMeTasksIds())
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  setNewShareRequest(taskId: string, usernameTo: string):Observable<any> {
    // console.log({
    //     username_from: this.userServiseModule.getUserFromLocalStorege().key_entry,
    //     username_to: usernameTo,
    //     task_id: taskId
    // });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}set_new_share_request`,
        {
            username_from: this.userServiseModule.getUserFromLocalStorege().key_entry,
            username_to: usernameTo,
            task_id: taskId
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  deleteShareRequest(taskId: string):Observable<any>{
    // console.log('taskId:', taskId);
    // console.log('usernameFrom:', this.userServiseModule.getUserFromLocalStorege().key_entry);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}delete_share_request`,
        {
            username_from: this.userServiseModule.getUserFromLocalStorege().key_entry,
            task_id: taskId
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  applyShareRequest(taskId: string):Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}apply_share_request`,
        {
            username_to: this.userServiseModule.getUserFromLocalStorege().key_entry,
            task_id: taskId,
            password: this.userServiseModule.getUserFromLocalStorege().password
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  cancelShareRequest(taskId: string):Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}cancel_share_request`,
        {
            username_to: this.userServiseModule.getUserFromLocalStorege().key_entry,
            task_id: taskId
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  private getSharedWithMeTasksIds(){
      let idsArray = [];
      for(let i = 0; i < this.sharedWithMeTasks.length; i++){
        idsArray.push(this.sharedWithMeTasks[i]._id);
      }
      return idsArray;
  }
  private extractData(res: Response) {
    //console.log(res.json());
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}