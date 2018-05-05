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
            color="light"
            tappable
            (click)="chooseItem('')"
        >
            empty
            <ion-icon name="md-paw" item-end class="clockItem"></ion-icon>
        </ion-item>
        <ion-item *ngFor="let autocompleteItem of autocompleteItems"
            tappable   
            (click)="chooseItem(autocompleteItem)"
        >
            <ion-icon item-start 
                [name]="autocompleteItem.icon"
                class="taskIcon"
            ></ion-icon>
            <p>{{ autocompleteItem.formated_name }}</p>
        </ion-item>
    </ion-list>
</ion-content>
`
})

export class SearchFilterPage {

@ViewChild("searchBar") searchBar: Searchbar;

    public autocompleteQuery: string;

    private autocompleteItems: any;
    private fieldName: string;
    private currItem;

    constructor (
        private viewCtrl: ViewController,
        private navParams: NavParams
    ){
        this.fieldName = this.navParams.get('fieldName');
        this.currItem = this.navParams.get('currItem');
        this.autocompleteQuery = this.currItem.formated_name;
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
        this.autocompleteItems = this.navParams.get('itemsList');
    }

    //filter the list when the user do some changes in search input
    updateSearch() {

        //initilize list befor filtering
        this.initializeItems();

        if (this.autocompleteQuery && this.autocompleteQuery.trim() != '') {//check if input is not empty
            //filtering
            this.autocompleteItems = this.autocompleteItems.filter((item) => {
                //compairing list containt and user input (formated to lower case)
                return (item.formated_name.toLowerCase().indexOf(this.autocompleteQuery.toLowerCase()) > -1);
            });
        }
    }

    //cancel changes and return previous value
    dismiss() {
        this.viewCtrl.dismiss({
            fieldName: this.fieldName,
            item: this.currItem
        });
    }

    //choosing new item and pass this to input
    chooseItem(item){
        this.viewCtrl.dismiss({
            fieldName: this.fieldName,
            item: item
        });
    }
}