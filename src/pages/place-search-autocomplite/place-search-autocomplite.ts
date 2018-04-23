import {Component, NgZone, ElementRef, ViewChild} from '@angular/core';
import {ViewController, Searchbar, NavParams} from 'ionic-angular';
import { MapsAPILoader } from '@agm/core';
// import { } from 'googlemaps';
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

export class PlaceSearchAutocomplitePage {

@ViewChild("searchBar") searchBar: Searchbar;

    autocompleteItems;
    autocomplete;

    geo: any

    service;

    private pointName: string;

    constructor (
        public viewCtrl: ViewController,
        private zone: NgZone,
        private mapsAPILoader: MapsAPILoader,
        public navParams: NavParams
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
            this.pointName = this.navParams.get('pointName');
        }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    chooseItem(item: any) {
        
        // this.viewCtrl.dismiss(item);
        this.geo = item;
        this.geoCode(this.geo, item);//convert Address to lat and long
    }

    updateSearch() {

        if (this.autocomplete.query == '') {
        this.autocompleteItems = [];
        return;
        }

        let me = this;
        this.service.getPlacePredictions({
        input: this.autocomplete.query,
        componentRestrictions: {
        country: 'il'
        }
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
    geoCode(address:any, item) {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, (results, status) => {
        this.viewCtrl.dismiss({
            point_name: this.pointName,
            field_adress: item,
            data: {
                address: results[0].formatted_address,
                place_id: results[0].place_id,
                geometry: {
                    location: {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    }       
                }
            }      
        });
    });
    }

}