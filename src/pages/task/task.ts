import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksServiseModule } from '../../modules/tasks_mdl.component';
import { SearchFilterPage } from '../serch-filter/serch-filter';
import { PlaceSearchAutocomplitePage } from '../place-search-autocomplite/place-search-autocomplite';
import { Task } from '../../models/task.model';
import { MoreOptionsPage } from '../more-options/more-options';

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})

export class TaskPage {

  public taskForm: FormGroup;
  public location = {};
  task: Task;

  newTask: boolean;
  formChanged: boolean;
  taskName: string;

  private value: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    public tasksServiseModule: TasksServiseModule,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController
  ) {
    this.initializeTaskForm();
  }

  private initializeTaskForm(){
    this.task = this.navParams.get('task') || {};

    this.setEditFormDefaulParams();
    if(this.navParams.get('task') === undefined){
      this.newTask = true;
    } else {
      this.taskName = this.task.name;
      this.taskForm.disable();
    }

    this.taskForm.valueChanges.subscribe(newValues => {
      console.log('form changed');
      this.formChanged = true;
    });
  }


  private setEditFormDefaulParams(){
    this.taskForm = this.fb.group({
      name: [this.task.name || '', [Validators.required, Validators.minLength(4)]],
      type: [this.task.type || '', [Validators.required, Validators.minLength(4)]],
      company: [(this.task.task_place)?(this.task.task_place.palce_key_word || ''):''],
      time_start: [(this.task.time)?(this.task.time.start_time || ''):''],
      time_end: [(this.task.time)?(this.task.time.end_time || ''):''],
      priorety: [this.task.priority || ''],
      place: [(this.task.location)?(this.task.location.address || ''):''],
      shered_to: [(this.task.share)?(this.task.share.user_name || ''):'']
    });
    this.location = this.task.location;
    this.formChanged = false;
  }


  onSubmit({ value }){
    this.value = value;
    this.newTask? 
      this.addNewTask() : 
      this.showPrompt(
        {title:'Update', message:'Accept changes?'},
        this.updateTask.bind(this)
      );
  }


  private addNewTask(){
    this.tasksServiseModule.addNewTask(this.value)
    .subscribe(
      response  =>{
        if(response){
          console.log(JSON.stringify(response));
        }
      },
      error =>{
        console.log(error);
      }
    );
    this.navCtrl.pop();
  }


  //creating modal seach filter window and pass list of items 
  showSearchFilterModal(event) {
    
    let modal = this.modalCtrl.create(
      SearchFilterPage,
      {
        feildName: event.ngControl.name,
        currItem: event.ngControl.value,
        itemsList: this.getItemsListForSerchFilter(event.ngControl.name)
      }
    );
    
    modal.onDidDismiss(data => {
      if(data !== undefined){
        this.taskForm.patchValue(
          JSON.parse(`{\"${data.feildName}\":\"${data.item}\"}`)
        )
      }
    });
    setTimeout(() => {
      modal.present();
    }, 150);
  }

  //prepare the apropriate list for 
  private getItemsListForSerchFilter(feildName: string){
    return [
      'Orange', 'Banana', 'Pear', 'Tomato',
      'Grape', 'Apple', 'Cherries', 'Cranberries',
      'Raspberries', 'Strawberries', 'Watermelon'
    ];
  }


  showAddressModal(placeFeild) {
    let modal = this.modalCtrl.create(PlaceSearchAutocomplitePage,{pointName: placeFeild});
    
    modal.onDidDismiss(data => {
      if(data !== undefined){
        this.taskForm.patchValue({
          'place': data.field_adress
        });

        this.location = data.data;
      }
    });
    setTimeout(() => {
      modal.present();
    }, 150);
  }


  onMoreOption(myEvent){
    let popover = this.popoverCtrl.create(
      MoreOptionsPage, {
        newTaskForm: this.taskForm,
        taskId: this.task._id
      }
    );
    
    popover.onDidDismiss((button)=>{
      switch(button){
        case 'delete': {
          this.showPrompt(
            {
              title:'Delete',
              message:'Accept delete permanently?'
            },
            this.deleteTask.bind(this)
          );
          break;
        }
        case 'edit': {
          setTimeout(() => {
            this.taskForm.enable();
            this.formChanged = false;
          }, 150);
        }
      }
    });
    setTimeout(() => {
      popover.present({ ev: myEvent});
    }, 150);
  }


  onDiscard(){
    // if(this.newTask && !this.formChanged){
    //   this.navCtrl.pop();
    // } else if(this.newTask && this.formChanged){
    //   this.showPrompt(
    //     {title:'Discard', message:'Discard changes?'},
    //     this.setEditFormDefaulParams.bind(this)
    //   );

    // } else if(this.formChanged){
    //   this.showPrompt(
    //     {title:'Discard', message:'Discard changes?'},
    //     this.editFormReset.bind(this)
    //   );
    // } else {
    //   this.editFormReset();
    // }
    if(this.newTask && !this.formChanged){
      this.navCtrl.pop();
    } else {
      this.showPrompt(
        {title:'Discard', message:'Discard changes?'},
        () => {
          this.navCtrl.pop();
        }
        // this.navCtrl.pop.bind(this)
      );
    }
  }

  editFormReset(){
    this.setEditFormDefaulParams();
    setTimeout(() => {
      this.taskForm.disable();
    }, 150);
  }


  private deleteTask(){
    this.tasksServiseModule.deleteTask(
      this.task._id
    ).subscribe(
      response => {
        if(response){
          console.log(JSON.stringify(response));
        }
      },
      error =>{
        console.log(error);
      }
    );
    this.navCtrl.pop();
  }


  private updateTask(){
    
    this.tasksServiseModule.updateTask(
      this.task._id,
      this.value
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
    this.navCtrl.pop();
  }

  onSave({ value }){
    this.value = value;
    this.newTask? 
      this.addNewTask() : 
      this.showPrompt(
        {title:'Update', message:'Accept changes?'},
        this.updateTask.bind(this)
      );
  }

  showPrompt(promt, acceptMethod) {
    let prompt = this.alertCtrl.create({
      title: promt.title,
      message: promt.message,
      buttons: [
        {
          text: 'yes',
          handler: () => {
            acceptMethod();
          }
        },
        {
          text: 'no',
          handler: () => {}
        }
      ]
    });
    prompt.present();
  }
}
