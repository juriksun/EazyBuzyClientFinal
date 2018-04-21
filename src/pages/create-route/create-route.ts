import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { PlaceSearchAutocomplitePage } from '../place-search-autocomplite/place-search-autocomplite';
import { RouteServiseModule } from '../../modules/route_mdl.component';



@IonicPage()
@Component({
  selector: 'page-create-route',
  templateUrl: 'create-route.html',
})



export class CreateRoutePage {
  // @ViewChild("startPlace") startPlace;

  createRouteForm: FormGroup;

  location = {
    start_point: {},
    end_point: {}
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private routeServiseModule: RouteServiseModule
  ) {}

  ionViewDidLoad() {
    // this.createAucomplite();
  }
  ngOnInit() {
    
    this.createRouteForm = this.fb.group({
      mode:         ['driving' , [Validators.required, ]],
      start_point:  [ '', [Validators.required]], 
      end_point:    ['', [Validators.required]],
      start_time:        ['08:00' , [Validators.required]],
      end_time:          ['17:00' , [Validators.required]]
    });
  }

  onSubmit({ value }){
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
    this.routeServiseModule.createRoute(
      {
        mode:value.mode,
        time:{
          start_time: value.start_time,
          end_time: value.end_time
        },
        location: this.location
      }
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

  discard(){
    this.navCtrl.pop();
  }
}
