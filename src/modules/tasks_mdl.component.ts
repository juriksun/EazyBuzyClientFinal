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

@Injectable()
export class TasksServiseModule{
  tasks: Task[];
  private url: string = 'http://localhost:3000/';
  // private url: string = 'https://eazy-buzy-server.herokuapp.com/';
  // private url: string = Url.getUrl();

  constructor(
    private http: Http,
    private userServiseModule: UserServiseModule,
    public eventServiceModule: EventServiceModule
  ) {}

  onGetAllTasks(){
    this.getAllTasks()
      .subscribe(
        response => {
          if(response){
            this.tasks = response.tasks;
          }else {
            this.eventServiceModule.createEventMessage({message : "Error - response is undifined", status : false});
          }
        },
        error =>{
          console.log(error);
          this.eventServiceModule.createEventMessage({message : "Error - problem with server", status : false});
        }
      )
  }

  getAllTasks():Observable<TaskResponse> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    // console.log(this.userServiseModule.user);
    // console.log(JSON.stringify({
    //   key_entry: this.userServiseModule.user.key_entry,
    //   password: this.userServiseModule.user.password
    // }));
    return this.http.post(
        `${this.url}get_all_tasks`,
        {
          user: JSON.stringify({
            key_entry: this.userServiseModule.user.key_entry,
            password: this.userServiseModule.user.password
          })
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  

  getTypes():Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.get(`${this.url}get_types`).map(this.extractData).catch(this.handleError);
  }


  getCompanies(type: string):Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.get(
      `${this.url}get_companies/${type}`,
      options
    ).map(this.extractData).catch(this.handleError);
  }

  addNewTask(task):Observable<TaskResponse> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}create_task`,
        {
            user: JSON.stringify({
              key_entry: this.userServiseModule.user.key_entry,
              password: this.userServiseModule.user.password
            }),
            task: JSON.stringify(task)
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    // console.log(res.json());
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

  deleteTask(taskId):Observable<TaskResponse> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}delete_task`,
        {
          user: JSON.stringify({
            key_entry: this.userServiseModule.user.key_entry,
            password: this.userServiseModule.user.password
          }),
          task_id: taskId
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  updateTask(taskId, taskUpdateData):Observable<TaskResponse> {
    // console.log(taskId);
    // console.log(taskUpdateData);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}update_task`,
        {
          user: JSON.stringify({
            key_entry: this.userServiseModule.user.key_entry,
            password: this.userServiseModule.user.password
          }),
          task_id: taskId,
          task_update_data: JSON.stringify(taskUpdateData)
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }


  addOrUpdateTask(taskId, taskUpdateData, locationData):Observable<TaskResponse> {
    // console.log(taskId);
    // console.log(taskUpdateData);
    // console.log(locationData);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}add_or_update_task`,
        {
          user: JSON.stringify({
            key_entry: this.userServiseModule.user.key_entry,
            password: this.userServiseModule.user.password
          }),
          task_id: taskId,
          task_update_data: JSON.stringify(taskUpdateData),
          task_location_data: JSON.stringify(locationData)
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }
}