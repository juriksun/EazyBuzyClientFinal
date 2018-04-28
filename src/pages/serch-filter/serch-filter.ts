import {Component, ElementRef, ViewChild} from '@angular/core';
import {ViewController, Searchbar, NavParams} from 'ionic-angular';
/*
    
*/
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
        <ion-item
            tappable
            (click)="chooseItem('')"
        >
            empty
        </ion-item>
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

    public autocompleteQuery: string;


    private autocompleteItems: string[];
    private pointName: string;
    private currItem: string;

    constructor (
        private viewCtrl: ViewController,
        private navParams: NavParams
    ){
        this.initializeItems();
    }


    ionViewDidEnter() {

        //focus must be with timeout for correct working
        setTimeout(() => {
            this.searchBar.setFocus();
        }, 150);
    }

    //initialize item list from navigation passed parameter
    initializeItems() {
        this.autocompleteItems = this.navParams.get('listOfItems');
        this.autocompleteQuery = this.navParams.get('currItem');
    }

    //filter the list when the user do some changes in search input
    updateSearch() {

        //initilize list befor filtering
        this.initializeItems();

        if (this.autocompleteQuery && this.autocompleteQuery.trim() != '') {//check if input is not empty
            //filtering
            this.autocompleteItems = this.autocompleteItems.filter((item) => {
                //compairing list containt and user input (formated to lower case)
                return (item.toLowerCase().indexOf(this.autocompleteQuery.toLowerCase()) > -1);
            });
        }
    }

    

    dismiss() {
        this.viewCtrl.dismiss({
            pointName: this.navParams.get('pointName'),
            item: this.currItem
        });
    }

    chooseItem(item: string){
        this.viewCtrl.dismiss({
            pointName: this.navParams.get('pointName'),
            item: item
        });
    }
}