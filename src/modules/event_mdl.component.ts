import {Injectable} from "@angular/core";
import { ToastController } from "ionic-angular/components/toast/toast-controller";


@Injectable()
export class EventServiceModule{
  private checklist: any;
 private  checklistObserver: any;
  private msgStack = [] ;
  private currentMsg = null; 
  constructor(
    public toastCtrl: ToastController
  ) {}

  createEventMessage({message , status}){
   
    this.msgStack.unshift(this.toastCtrl.create({
        message: message,
        duration: 2000,
        position:"top",
        cssClass : status ? 'toast-default toast-sucess' : 'toast-default toast-failed'
    }))
    this.showEventMessage(this.msgStack);
 }

    showEventMessage(objMsg){
        if(this.currentMsg == null && objMsg.length > 0){
            this.currentMsg = objMsg.pop();
            this.currentMsg.present();
            this.currentMsg.onDidDismiss(()=>{
                this.currentMsg = null
            })
        }else{
            if(objMsg.length > 0)
                setTimeout(()=>{
                    this.showEventMessage(objMsg)
                },500)
        }
            
    }
  }

 
