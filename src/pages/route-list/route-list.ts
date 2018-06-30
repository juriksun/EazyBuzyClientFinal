import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RouteServiseModule } from '../../modules/route_mdl.component';

/**
 * Generated class for the RouteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-route-list',
  templateUrl: 'route-list.html',
})
export class RouteListPage {
  imgMapUrl ="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyAkz6xddABYhnT-iPqJePo3MIsiy1kxE9Q"
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public routeServiseModule: RouteServiseModule
  ) {
  }

  ionViewDidLoad() {
    // this.getImage(this.imgMapUrl)
    // console.log('ionViewDidLoad RouteListPage');
  }

  getImage(imgMapUrl){
    this.routeServiseModule.getImageStatic(imgMapUrl)
    .subscribe(
      response => {
        if (response) {
          // console.log(response);
        }
      },
      error => {
        console.log(error);
      }
    );

  }
}
