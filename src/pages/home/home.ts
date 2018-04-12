import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlexPage } from '../alex/alex';
import { AddNewTaskPage } from '../add-new-task/add-new-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onList(){
    //console.log('test');
    this.navCtrl.push(AlexPage);
  }
  onAddTask(){
    this.navCtrl.push(AddNewTaskPage);
  }
}
