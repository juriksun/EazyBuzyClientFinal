import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { TaskResponse } from "../models/tasks-response.model";
import { User } from "../models/user.model";

@Injectable()
export class TasksServiseModule{

  private url: string = 'http://localhost:3000/';

  constructor(private http: Http) {}

  getAllTasks(username:string, password: string):Observable<TaskResponse> {
    //console.log('in get all tasks!!!');

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}get_all_tasks`,
        {
            username: username,
            password: password
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }


  addNewTask(user, task):Observable<TaskResponse> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}create_task`,
        {
            user: JSON.stringify(user),
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
}