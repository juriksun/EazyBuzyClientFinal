import {Component} from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';

@Component({
  template: `
  <ion-header>
  <ion-toolbar>
    <ion-title>Route Preview</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>

<ion-list no-lines>
    <ion-item>
        <ion-icon item-start       
            name="md-clipboard"
        >
        </ion-icon>
        <ion-label>Tasks</ion-label>
    </ion-item>
    <ion-item  
        *ngFor="let task of tasks"
    >
        <ion-icon 
            item-start
            [name]="task.task_place.place_type.icon" 
            class="taskIcon"
        >
        </ion-icon>
        <h2>{{task.name}}</h2>
        <ion-icon 
            name="md-time"
            item-end class="clockItem" 
            *ngIf="task.time.start_time != '' || task.time.duration || task.time.date"
        >
        </ion-icon>
        <ion-note item-end *ngIf="task.time">
        <p>{{task.time.start_time}}</p>
    <p *ngIf="task.time.duration">{{task.time.duration}}</p>
    <p *ngIf="task.time.date">{{task.time.date}}</p>
  </ion-note>
  <div class="placeForPin" item-end>
    <ion-icon name="md-pin" style="zoom: 1.5;" *ngIf="task.location.address"></ion-icon>
  </div>
  
</ion-item>
</ion-list>
</ion-content>
  `
  
})

export class RoutePreviewPage{
    route;
    tasks: any[];
    constructor (
        public viewCtrl: ViewController,
        public navParams: NavParams
    ) {
        
    }
        
    ionViewDidEnter(){
        this.route = this.navParams.get('route');
        this.tasks = this.route.all_tasks;
        console.log(this.route);
    }

}