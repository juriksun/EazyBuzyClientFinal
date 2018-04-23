import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { TaskResponse } from "../models/tasks-response.model";
import { User } from "../models/user.model";
import { UserServiseModule } from "./user_mdl.component";
import { Url } from "../models/url.model";

@Injectable()
export class TasksServiseModule{

  private url: string = 'http://localhost:3000/';
  // private url: string = 'https://eazy-buzy-server.herokuapp.com/';
  // private url: string = Url.getUrl();

  constructor(
    private http: Http,
    private userServiseModule: UserServiseModule
  ) {}

  getAllTasks():Observable<TaskResponse> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}get_all_tasks`,
        {
          user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege())
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  addNewTask(task):Observable<TaskResponse> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}create_task`,
        {
            user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege()),
            task: JSON.stringify(task)
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res.json());
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
          user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege()),
          task_id: taskId
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  updateTask(taskId, taskUpdateData):Observable<TaskResponse> {
    console.log(taskId);
    console.log(taskUpdateData);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}update_task`,
        {
          user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege()),
          task_id: taskId,
          task_update_data: JSON.stringify(taskUpdateData)
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }
}