import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { TaskResponse } from "../models/tasks-response.model";
import { User } from "../models/user.model";
import { UserServiseModule } from "./user_mdl.component";

@Injectable()
export class RouteServiseModule{

  // private url: string = 'http://localhost:3000/';
  private url: string = 'https://eazy-buzy-server.herokuapp.com/';
  constructor(
    private http: Http,
    private userServiseModule: UserServiseModule
  ) {}

  createRoute(routeInitData):Observable<TaskResponse> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    console.log(this.userServiseModule.getUserFromLocalStorege());
    console.log(routeInitData);
    
    return this.http.post(
        `${this.url}create_rou`,
        {
            user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege()),
            route_init_data: JSON.stringify(routeInitData)
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