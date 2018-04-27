import {Component, ElementRef, ViewChild} from '@angular/core';
import {ViewController, Searchbar, NavParams} from 'ionic-angular';

@Component({
  template:
`
<ion-header>
    <ion-toolbar>
        <ion-title>Enter address</ion-title>
        <ion-searchbar
            #searchBar
            [(ngModel)]="autocompleteQuery"
            [showCancelButton]="true"
            (ionInput)="updateSearch()"
            (ionCancel)="dismiss()"
        ></ion-searchbar>
    </ion-toolbar>
</ion-header>

<ion-content>
    <ion-list>
        <ion-item *ngFor="let item of items"
            tappable   
            (click)="chooseItem(item)"
        >
            {{ item }}
        </ion-item>
    </ion-list>
    <ion-list>
        <ion-item *ngFor="let autocompleteItem of autocompleteItems"
            tappable   
            (click)="chooseItem(autocompleteItem)"
        >
            {{ autocompleteItem }}
        </ion-item>
    </ion-list>
</ion-content>
`

})

export class SearchFilterPage {

@ViewChild("searchBar") searchBar: Searchbar;

    autocompleteItems: string[];
    autocompleteQuery:string;
    
    private pointName: string;

    constructor (
        public viewCtrl: ViewController,
        public navParams: NavParams
    ){
        this.initializeItems();
    }

    initializeItems() {
        this.pointName = this.navParams.get('pointName');

        this.autocompleteItems = this.navParams.get('listOfItems');
        this.autocompleteItems = [
          'Amsterdam',
          'Bogota',
          'Buenos Aires',
          'Cairo',
          'Dhaka',
          'Edinburgh',
          'Geneva',
          'Genoa',
          'Glasglow',
          'Hanoi',
          'Hong Kong',
          'Islamabad',
          'Istanbul',
          'Jakarta',
          'Kiel',
          'Kyoto',
          'Le Havre',
          'Lebanon',
          'Lhasa',
          'Lima',
          'London',
          'Los Angeles',
          'Madrid',
          'Manila',
          'New York',
          'Olympia',
          'Oslo',
          'Panama City',
          'Peking',
          'Philadelphia',
          'San Francisco',
          'Seoul',
          'Taipeh',
          'Tel Aviv',
          'Tokio',
          'Uelzen',
          'Washington',
          'bank leumi'
        ];
    }

    updateSearch() {

        this.initializeItems();

        if (this.autocompleteQuery && this.autocompleteQuery.trim() != '') {
          this.autocompleteItems = this.autocompleteItems.filter((item) => {
            return (item.toLowerCase().indexOf(this.autocompleteQuery.toLowerCase()) > -1);
            })
        }
    }

    ionViewDidEnter() {
        setTimeout(() => {
            this.searchBar.setFocus();
        }, 150);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}