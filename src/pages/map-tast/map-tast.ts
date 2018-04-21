import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AutocompletePage } from './auto-complite-page';

/**
 * Generated class for the MapTastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-tast',
  templateUrl: 'map-tast.html',
})
export class MapTastPage {

  address;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private modalCtrl:ModalController) {
      this.address = {
        place: ''
      };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapTastPage');
  }

  showAddressModal () {
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;
    });
    modal.present();
  }
}
