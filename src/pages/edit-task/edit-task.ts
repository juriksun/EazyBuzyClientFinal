import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksServiseModule } from '../../modules/tasks_mdl.component';
import { Task } from '../../models/task.model';
import { MoreOptionsPage } from '../more-options/more-options';
import { HomePage } from '../home/home';
import { PlaceSearchAutocomplitePage } from '../place-search-autocomplite/place-search-autocomplite';

@IonicPage()
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskPage {
  task: Task;
  editTaskForm: FormGroup;

  createRouteForm: FormGroup;

  location = {};


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    public tasksServiseModule: TasksServiseModule,
    public popoverCtrl: PopoverController,
    private modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewTaskPage');
  }

  ngOnInit() {
    this.task = this.navParams.data;
    this.setEditFormDefaulParams();
    this.editTaskForm.disable();
  }

  setEditFormDefaulParams(){
    this.editTaskForm = this.fb.group({
      name: [this.task.name , [Validators.required, Validators.minLength(4)]],
      type: [this.task.type, [Validators.required, Validators.minLength(4)]],
      time_start: [(this.task.time)?(this.task.time.start_time || ''):''],
      time_end: [(this.task.time)?(this.task.time.duration || ''):''],
      priorety: [''],
      place: ['', [Validators.minLength(4)]],
      shered_to: ['', [Validators.minLength(4)]]
    });

  }

  editFormReset(){
    this.setEditFormDefaulParams();
    setTimeout(() => {
      this.editTaskForm.disable();
    }, 150);
  }

  onSubmit({ value }){
    this.updateTask(value, this.task._id);
    this.navCtrl.setRoot(HomePage);
  }

  private deleteTask(value){
    
    this.tasksServiseModule.deleteTask(
      value
    )
      .subscribe(
        response  =>{
          if(response){
            console.log(JSON.stringify(response));
          }
        },
        error =>{
          console.log(error);
        }
      )
  }

  private updateTask(value, taskId){
    this.tasksServiseModule.updateTask(
      taskId,
      value
    )
    .subscribe(
      response => {
        if (response) {
          console.log(JSON.stringify(response));
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onMoreOption(myEvent){
    let popover = this.popoverCtrl.create(
      MoreOptionsPage, {
        newTaskForm: this.editTaskForm,
        taskId: this.task._id
      }
    );
    popover.onDidDismiss((button)=>{
      switch(button){
        case 'delete': {
          this.navCtrl.pop();
          break;
        }
        case 'edit': {
          setTimeout(() => {
            this.editTaskForm.enable();
          }, 150);
        }
      }
    });
    setTimeout(() => {
      popover.present({ ev: myEvent});
    }, 150);
  }

  onDiscard(){
    this.editFormReset();
  }

  showAddressModal(placeFeild) {
    let modal = this.modalCtrl.create(PlaceSearchAutocomplitePage,{pointName: placeFeild});
    let me = this;
    
    modal.onDidDismiss(data => {
      if(data !== undefined){
        this.createRouteForm.patchValue({
          place: data.field_adress
        });

        this.location = data.data;
      }
    });
    setTimeout(() => {
      modal.present();
    }, 150);
  }
}
