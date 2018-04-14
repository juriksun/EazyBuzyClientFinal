import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the CreateRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-route',
  templateUrl: 'create-route.html',
})
export class CreateRoutePage {
  createRouteForm: FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    // public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    private fb: FormBuilder,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRoutePage');
  }
  ngOnInit() {
    
    this.createRouteForm = this.fb.group({
      mode:   ['driving' , [Validators.required]],
      begin:  ['08:00' , [Validators.required]],
      end:    ['17:00' , [Validators.required]]
    });
    // this.createRouteForm = this.fb.group({
    //   mode:   ['' , [Validators.required]],
    //   begin:  ['' , [Validators.required]],
    //   end:    ['' , [Validators.required]]
    // });
  }
  onSubmit({ value }){
    console.log(value);
    //console.log(value);
    // this.addNewTask(value);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
