import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksServiseModule } from '../../modules/tasks_mdl.component';
import { SearchFilterPage } from '../serch-filter/serch-filter';
import { PlaceSearchAutocomplitePage } from '../place-search-autocomplite/place-search-autocomplite';
import { Task } from '../../models/task.model';
import { MoreOptionsPage } from '../more-options/more-options';
import { SharePage } from '../share/share';
import { ShareServiseModule } from '../../modules/share_mdl.component';
import { EventServiceModule } from '../../modules/event_mdl.component';

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})

export class TaskPage {
  @ViewChild("taskNameRef") taskNameRef;
  public taskForm: FormGroup;
  public shareStatus: string = "no";
  public shareName: string;
  public location;
  
  taskPlace; 

  task: Task;

  newTask: boolean;
  formChanged: boolean;
  taskName: string;

  types: any;

  companies: any;

  private value: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    public tasksServiseModule: TasksServiseModule,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    public shareServiseModule: ShareServiseModule,
    private eventServiceModule: EventServiceModule
  ) {
    this.initializeTaskForm();
  }

  ionViewDidEnter(){
    if(this.newTask){
      setTimeout(() => {
        this.taskNameRef.setFocus();
      }, 150);
    }
  }

  private getTypes(){
      this.tasksServiseModule.getTypes()
      .subscribe(
        response => {
          if(response){
            if(response.status = true){
              // console.log(response.types);
              this.types = response.types;
            }
            // console.log(JSON.stringify(response));
          }
        },
        error =>{
          console.log(error);
        }
      );
  }

  private getCompanies(type: string){
    this.tasksServiseModule.getCompanies(type)
    .subscribe(
      response => {
        if(response){
          // console.log(response);
          if(response.status = true && response.data){
            this.companies = response.data.companies;
          }
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

  private initializeTaskForm(){
    this.task = this.navParams.get('task') || {};
    this.getTypes();

    this.setEditFormDefaulParams();

    if(this.navParams.get('task') === undefined){
      this.newTask = true;
    } else {
      this.getCompanies(this.taskPlace.place_type.formated_name);
      
      this.taskForm.disable();
    }
    
    this.taskForm.valueChanges.subscribe(newValues => {
      this.formChanged = true;
    });
  }

  private setEditFormDefaulParams(){
    if(this.task.share && this.task.share !== ""){
      if(this.navParams.get('username')){
        this.shareStatus = "with_me";
        this.shareName = this.navParams.get('username');
      } else {
        this.shareStatus = "shared";
        this.shareName = this.task.share;
      }   
    }
    if(this.navParams.get('task') !== undefined){
      this.taskPlace = this.task.task_place;
      this.location = this.task.location;
    } else {
      this.location = {
        address: '',
        place_id: '',
        geometry: {
          location: {
            lat: 0,
            lng: 0
          }
        }
      };
      
      this.taskPlace = {
        place_type: {
          formated_name: '',
          name: '',
          icon: ''
        },
        place_company: {
          formated_name: '',
          name: '',
          icon: ''
        }
      };
    }

    this.taskForm = this.fb.group({
      name: [this.task.name || '', [Validators.required, Validators.minLength(4)]],
      place_type: [this.taskPlace.place_type.formated_name],
      place_company: [this.taskPlace.place_company.formated_name],
      time_start: [(this.task.time)?(this.task.time.start_time || ''):''],
      time_date: [(this.task.time)?(this.task.time.date || ''):''],
      time_duration: [(this.task.time)?(this.task.time.duration || ''):''],
      priority: [this.task.priority || ''],
      place: [(this.task.location)?(this.task.location.address || ''):''],
    });
    this.formChanged = false;
  }


  onSubmit({ value }){
    this.value = value;
    this.newTask? 
      this.addOrUpdateTask() : 
      this.showPrompt(
        {title:'Update', message:'Accept changes?'},
        this.addOrUpdateTask.bind(this)
      );
  }

  private addOrUpdateTask(){
    // console.log(this.location);
    this.tasksServiseModule.addOrUpdateTask(
      this.task._id,
      this.value,
      this.location
    )
    .subscribe(
      response => {
        if (response) {
          // console.log(JSON.stringify(response));
        }
      },
      error => {
        console.log(error);
      }
    );
    this.navCtrl.pop();

  }


  private addNewTask(){
    this.tasksServiseModule.addNewTask(this.value)
    .subscribe(
      response  =>{
        if(response){
          // console.log(JSON.stringify(response));
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
        fieldName: event.ngControl.name,
        currItem: this.taskPlace[event.ngControl.name],
        itemsList: this.getItemsListForSerchFilter(event.ngControl.name)
      }
    );
    
    modal.onDidDismiss(data => {
      if(data !== undefined){
        this.taskForm.patchValue(
          JSON.parse(`{\"${data.fieldName}\":\"${data.item.formated_name}\"}`)
        )
        
        this.taskPlace[data.fieldName] = data.item;

        if(data.fieldName === 'place_type'){
          this.taskForm.patchValue({
            place_company: ''
          })
          this.taskPlace.place_company = {
            formated_name: '',
            name: '',
            icon: ''
          }
          this.getCompanies(data.item.name);
        }
      }
    });
    setTimeout(() => {
      modal.present();
    }, 150);
  }

  //prepare the apropriate list for 
  private getItemsListForSerchFilter(fieldName: string){
    switch(fieldName){
      case 'place_type':{
        return this.types;
      }
      case 'place_company': {
        return this.companies;
      }
      default: {
        return [];
      }
    }
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
        share_status: this.shareStatus,
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
          break;
        }
        case 'share': {
          
          this.shareTask();
          break;
        }
        case 'unshare': {
          this.unshareTask();
          break;
        }
        case 'apply': {
          this.applyShareTask();
          break;
        }
        case 'cancel': {
          this.cancelShareTask();
          break;
        }
      }
    });
    setTimeout(() => {
      popover.present({ ev: myEvent});
    }, 150);
  }

  applyShareTask(){
    this.shareServiseModule.applyShareRequest(
      this.task._id
    ).subscribe(
      response => {
        if(response){
          if(response.status){
            this.shareServiseModule.onGetAllShareTasks();
            this.eventServiceModule.createEventMessage({message : response.response, status : response.status});
            this.navCtrl.pop();
            // get all shared request

          } else{
            this.showPromptOk(
              response.error,
              response.message
            );
          }
        } else {
          this.showPromptOk(
            'Error',
            'Server Error. Please try again later...'
          );
        }
      },
      error =>{
        console.log(error);
        this.showPromptOk(
          'Error',
          'Server Error. Please try again later...'
        );
      }
    );
  }

  cancelShareTask(){
    this.shareServiseModule.cancelShareRequest(
      this.task._id
    ).subscribe(
      response => {
        if(response){
          // console.log(response);
          if(response.status){
            this.shareServiseModule.onGetAllShareTasks();
            this.eventServiceModule.createEventMessage({message : response.response, status : response.status});
            this.navCtrl.pop();
            // get all shared request
            
          } else {
            this.showPromptOk(
              response.error,
              response.message
            );
          }
        } else {
          this.showPromptOk(
            'Error',
            'Server Error. Please try again later...'
          );
        }
      },
      error =>{
        console.log(error);
        this.showPromptOk(
          'Error',
          'Server Error. Please try again later...'
        );
      }
    );
  }

  shareTask(){
    this.navCtrl.push(SharePage, {task_id: this.task._id});
  }

  unshareTask(){
    this.shareServiseModule.deleteShareRequest(
      this.task._id
    ).subscribe(
      response => {
        if(response){
          if(response.status){
            this.showPromptOk(
              'Unshare',
              response.response
            );
            // this.eventServiceModule.createEventMessage({message : response.responsemessage, status : response.status});
            this.shareStatus = "no";
          } else {
            this.showPromptOk(
              response.error,
              response.message
            );
          }
        } else {
          this.showPromptOk(
            'Error',
            'Server Error. Please try again later...'
          );
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

//   this.viewCtrl.dismiss('apply');
// }

// onCancel(){
//   this.viewCtrl.dismiss('cancel');

  onDiscard(){
    if(this.newTask && !this.formChanged){
      this.navCtrl.pop();
    } else {
      this.showPrompt(
        {title:'Discard', message:'Discard changes?'},
        () => this.navCtrl.pop()
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
          // console.log(JSON.stringify(response));
        }
        this.navCtrl.pop();
      },
      error =>{
        console.log(error);
      }
      
    );
    
  }

  //
  private updateTask(){
    this.tasksServiseModule.updateTask(
      this.task._id,
      this.value
    )
    .subscribe(
      response => {
        if (response) {
          // console.log(JSON.stringify(response));
        }
      },
      error => {
        console.log(error);
      }
    );
    this.navCtrl.pop();
  }

  //on click save button
  onSave({ value }){
    this.value = value;
    this.value.task_place = this.taskPlace;
    this.newTask? 
      this.addOrUpdateTask() : 
      this.showPrompt(
        {title:'Update', message:'Accept changes?'},
        this.addOrUpdateTask.bind(this)
      );
  }

  //show alert modal window with user title and message
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

  showPromptOk(title, message){
    let prompt = this.alertCtrl.create({
    title: title,
    message: message,
    buttons: [
      {
        text: 'ok',
        handler: () => {
        }
      }
    ]
  });
  prompt.present();
  }

}
