import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { UserResponse } from "../models/user-response.model";
import { Url } from "../models/url.model";

@Injectable()
export class UserServiseModule{

  // private url: string = 'http://localhost:3000/';
  private url: string = 'https://eazy-buzy-server.herokuapp.com/';
  // private url: string = Url.getUrl();
  constructor(
    private http: Http,
    private storage: Storage
  ) {}

  signIn(user):Observable<UserResponse> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}set_new_user`,
        {
            user: JSON.stringify(user)
        },
        options
    ).map(this.extractData).catch(this.handleError);
  }

  login(user):Observable<UserResponse> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(
        `${this.url}get_user`,
        {
            user: JSON.stringify(user)
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

  setUserInLocalStorage(user){
    // console.log(user);
    localStorage.setItem('eazyBuzyKeyEntry', user.key_entry);
    localStorage.setItem('eazyBuzyPassword',user.password);
    // this.storage.set('eazyBuzyEmail', user.email);
    // this.storage.set('eazyBuzyPassword',user.password);
  }

  serLastUserInLocalStorage(user){
    localStorage.setItem('eazyBuzyLastKeyEntry', user.key_entry);
    localStorage.setItem('eazyBuzyLastPassword', user.password);
  }

  getLastUserFromLocalStorage(){
    let lastKeyEntry = localStorage.getItem('eazyBuzyLastKeyEntry'),
        lastPassword = localStorage.getItem('eazyBuzyLastPassword');
    if(lastKeyEntry && lastKeyEntry){
      return {
        key_entry: lastKeyEntry,
        password: lastPassword
      }
    } else {
      return {
        key_entry: '',
        password: ''
      }
    }
  }

  removeLastUserFromLocalStorage(){
    localStorage.removeItem('eazyBuzyLastKeyEntry');
    localStorage.removeItem('eazyBuzyLastPassword');
  }

  checkIfLogedIn(){
      return localStorage.getItem('eazyBuzyKeyEntry') && localStorage.getItem('eazyBuzyPassword');
  }

  loggOut(){
    localStorage.removeItem('eazyBuzyKeyEntry');
    localStorage.removeItem('eazyBuzyPassword');
  }

  getUserFromLocalStorege(){
    return {
      key_entry: localStorage.getItem('eazyBuzyKeyEntry'),
      password: localStorage.getItem('eazyBuzyPassword')
    };
  }
}