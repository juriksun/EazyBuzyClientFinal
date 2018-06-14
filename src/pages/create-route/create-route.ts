import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import { PlaceSearchAutocomplitePage } from '../place-search-autocomplite/place-search-autocomplite';
import { RouteServiseModule } from '../../modules/route_mdl.component';
import { RouteDetailsPage } from '../route-details/route-details';
import { TasksServiseModule } from '../../modules/tasks_mdl.component';
import { Task } from '../../models/task.model';
import { RoutesPreviewPage } from '../routes-preview/routes-preview';




@IonicPage()
@Component({
  selector: 'page-create-route',
  templateUrl: 'create-route.html',
})



export class CreateRoutePage{
  @ViewChild("listOfTasks") listOfTasks;
  checkedAll: boolean = true;
  chekedTasks = [];
  selectTasksMode: boolean = false;
  tasks: Task[] = [];


  modalWait;
  createRouteForm: FormGroup;

  location = {
    start_point: {},
    end_point: {}
  };

  private requestCounter = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private routeServiseModule: RouteServiseModule,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private tasksServiseModule: TasksServiseModule
  ) {}

  ionViewDidLoad() {
    this.tasks = this.tasksServiseModule.tasks;
    this.initChekedTasks();
    // this.presentRoutesPreview([])
  }

  presentRoutesPreview(route){
    const routePreviewModal = this.modalCtrl.create(RoutesPreviewPage, {route: route});
    routePreviewModal.present();
  }
  ngOnInit() {
    
    this.createRouteForm = this.fb.group({
      mode:         ['driving' , [Validators.required, ]],
      start_point:  ['', [Validators.required]], 
      end_point:    ['', [Validators.required]],
      start_time:   ['', [Validators.required]],
      end_time:     ['', [Validators.required]],
      date:         ['', [Validators.required]],
      tasksMode:    ['allTasks'],
      tasks:        ['']
    });
    
  }

  onChangeAllTasks(checked){
    this.checkedAll = checked;

    if(checked || this.allTaskCheked()){
      this.checkTasks(checked);
    }
  }

  checkTasks(checked){
    for(let i = 0; i < this.chekedTasks.length; i++){
      this.chekedTasks[i].checked = checked;
    }
  }


  initChekedTasks(){
    for(let i =0; i < this.tasks.length; i++){
      this.chekedTasks.push({
        id: this.tasks[i]._id,
        checked: true
      })
    }
  }

  isCheked(taskId){
    return true;
  }


  onSubmit({ value }){
    this.presentLoadingDefault();
    this.createNewRoute(value);
  }

  showAddressModal(placeFeild) {
    let modal = this.modalCtrl.create(PlaceSearchAutocomplitePage,{pointName: placeFeild});
    // let me = this;
    
    modal.onDidDismiss(data => {
      if(data !== undefined){
        this.createRouteForm.patchValue(
          JSON.parse(`{\"${data.point_name}\":\"${data.field_adress}\"}`)
        )
        this.location[placeFeild] = data.data;
      }
    });
    setTimeout(() => {
      modal.present();
    }, 150);
    // modal.present();
  }

  createNewRoute(value){

    this.requestCounter++;
    this.routeServiseModule.createRoute(
      {
        mode:value.mode,
        time:{
          start_time: value.start_time,
          end_time: value.end_time,
          date: value.date
        },
        location: this.location,
        tasks: this.getAllCheckedTasks()
      }
    )
    .subscribe(
      response => {
        if (response) {
          this.modalWait.dismiss();
            this.routeServiseModule.route = response.data.recommended_route;
            this.presentRoutesPreview(response.data);
            console.log(response.data);
            //this.navCtrl.setRoot(RouteDetailsPage);
        } else {
          this.modalWait.dismiss();
          this.presentAlert();
        }
      },
      error => {
        if(this.requestCounter === 3){
          console.log(error);
          this.modalWait.dismiss();
          this.presentAlert();
          this.requestCounter = 0;
        } else {
          setTimeout(() => {
            this.createNewRoute(value);
            console.log(this.requestCounter);
          }, 60000);
        }
      }
    );
  }

  getAllCheckedTasks(){
    let checkedTasks = [];
    for(let i = 0; i < this.chekedTasks.length; i++){
      if(this.chekedTasks[i].checked){
        checkedTasks.push(this.chekedTasks[i].id);
      }
    }
    return checkedTasks;
  }

  onDiscard(){
    this.navCtrl.pop();
  }

  presentLoadingDefault() {

    this.modalWait = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.modalWait.present();    
  }

  private presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Server Problem',
      subTitle: 'Please chenge time setings and retry...',
      buttons: ['Continue']
    });
    alert.present();
  }

  onChangeTasks(taskId, i, isChecked){
    this.chekedTasks[i].checked = isChecked;
    if(!isChecked){
      this.checkedAll = false;
    }else 
    if(this.allTaskCheked()){
      this.checkedAll = true;
    }
  }

  allTaskCheked(){
    for(let i = 0; i < this.chekedTasks.length; i++){
      if(!this.chekedTasks[i].checked){
        return false;
      }
    }
    return true;
  }
}
