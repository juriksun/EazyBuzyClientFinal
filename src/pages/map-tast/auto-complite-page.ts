import {Component, NgZone, ElementRef, ViewChild} from '@angular/core';
import {ViewController, Searchbar} from 'ionic-angular';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
@Component({
  template: `
  <ion-header>
  <ion-toolbar>
    <ion-title>Enter address</ion-title>
    <ion-searchbar #searchBar [(ngModel)]="autocomplete.query" [showCancelButton]="true"   (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">
      {{ item }}
    </ion-item>
  </ion-list>
</ion-content>
  `
})

export class AutocompletePage {

@ViewChild("searchBar") searchBar: Searchbar;


  autocompleteItems;
  autocomplete;

  latitude: number = 0;
  longitude: number = 0;
  geo: any

  service;

  constructor (
      public viewCtrl: ViewController,
       private zone: NgZone,
       private mapsAPILoader: MapsAPILoader,
    ) {
        
        this.mapsAPILoader.load().then(() => {
                this.service =  new google.maps.places.AutocompleteService();
          });


    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
    
  }

  ionViewDidEnter() {

    setTimeout(() => {
        this.searchBar.setFocus();
      }, 150);
 }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
    this.geo = item;
    this.geoCode(this.geo);//convert Address to lat and long
  }

  updateSearch() {

    if (this.autocomplete.query == '') {
     this.autocompleteItems = [];
     return;
    }

    let me = this;
    this.service.getPlacePredictions({
    input: this.autocomplete.query,
    // componentRestrictions: {
    //   country: 'de'
    // }
   }, (predictions, status) => {
     me.autocompleteItems = [];

   me.zone.run(() => {
     if (predictions != null) {
        predictions.forEach((prediction) => {
          me.autocompleteItems.push(prediction.description);
        });
       }
     });
   });
  }

  //convert Address string to lat and long
  geoCode(address:any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
    this.latitude = results[0].geometry.location.lat();
    this.longitude = results[0].geometry.location.lng();
    alert("lat: " + this.latitude + ", long: " + this.longitude);
   });
 }

 onFocuse(){
    //  console.log('serch focused');
 }
}