import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RouteDetailsPage } from '../route-details/route-details';
import { HomePage } from '../home/home';

/**
 * Generated class for the RoutesPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-routes-preview',
  templateUrl: 'routes-preview.html',
})
export class RoutesPreviewPage {
  route;
  tasks: any[];

  tasksRouteTrue: any[];
  tasksRouteFalse: any[];
  tasksOpenPlacesFalse: any[];
  tasksTimeWindowFalse: any[];

  constructor (
      public viewCtrl: ViewController,
      public navParams: NavParams,
      private navCtrl: NavController
  ) {
      
  }
      
  ionViewDidLoad(){
      let  routeData = this.navParams.get('route');
      this.tasks = routeData.all_tasks;
      this.route = routeData.recommended_route;
      
      this.setRouteTrue();
      this.setOpenPlacesFalse();
      this.setTimeWindowFalse();
  }

  setRouteTrue(){
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].route_status == "route true"){
        (this.tasksRouteTrue)? this.tasksRouteTrue.push(this.tasks[i]): (this.tasksRouteTrue = [this.tasks[i]]);
      }
    }
  }

  setOpenPlacesFalse(){
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].route_status == "places false"){
        (this.tasksOpenPlacesFalse)? this.tasksOpenPlacesFalse.push(this.tasks[i]): (this.tasksOpenPlacesFalse = [this.tasks[i]]);
      }
    }
  }

  setTimeWindowFalse(){
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].route_status == "time false"){
        (this.tasksTimeWindowFalse)? this.tasksTimeWindowFalse.push(this.tasks[i]): (this.tasksTimeWindowFalse = [this.tasks[i]]);
      }
    }
  }

  discard(){
    this.viewCtrl.dismiss();
  }
  convertMinutesToTime(minutes){   
    let hoursNumber = ~~(minutes / 60),
        minutesNumber = minutes - hoursNumber * 60;
    
    let stringHours = hoursNumber.toString(),
        stringMinutes = minutesNumber.toString();

    stringHours = (stringHours.length == 1)? ("0" + stringHours) : stringHours;
    stringMinutes = (stringMinutes.length == 1)? ("0" + stringMinutes) : stringMinutes;

    return stringHours + ":" + stringMinutes;
  }
  convertMetrToKiloMetr(meters){
    return (meters/1000).toFixed(1)
  }
  saveRoute(){
    this.navCtrl.setRoot(HomePage);
    
  }

  mapPreview(){
    this.navCtrl.push(RouteDetailsPage);
  }
  // setRouteFalse(){
  //   for(let i = 0; i < this.tasks.length; i++){
  //     console.log("task status: ", this.tasks[i].route_status);
  //     if(this.tasks[i].route_status == "route true"){
  //       (this.tasksRouteTrue)? this.tasksRouteTrue.push(this.tasks[i]): (this.tasksRouteTrue = [this.tasks[i]]);
  //     }
  //   }
  // }

  
}
