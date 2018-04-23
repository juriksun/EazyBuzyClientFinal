import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MapsAPILoader } from '@agm/core';
import { RouteServiseModule } from '../../modules/route_mdl.component';

@IonicPage()
@Component({
  selector: 'page-route-details',
  templateUrl: 'route-details.html',
})
export class RouteDetailsPage {
  // @ViewChild('map') mapElement;
  // mapService;

  // lat: number = 51.678418;
  // lng: number = 7.809007;

  polylines: number[];
  markers: number[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private zone: NgZone,
    private mapsAPILoader: MapsAPILoader,
    private routeServiseModule: RouteServiseModule
  ) {
    // this.mapsAPILoader.load().then(() => {
    //   this.mapService =  new google.maps.places.AutocompleteService();
    // });
  }

  ionViewDidLoad() {
    this.markers = this.routeServiseModule.route.markers;
    this.polylines = this.routeServiseModule.route.polylins;
    // this.InitMap();
  }

  discard(){
    this.navCtrl.setRoot(HomePage);
  }

  InitMap() {

    this.setLocation();
    // let input = document.getElementById('places');
    // let autocomplete = new google.maps.places.Autocomplete(input);
  
    // google.maps.event.addListener(autocomplete, 'place_changed', () => {
  
    //   let place = autocomplete.getPlace();
    //   this.latitude = place.geometry.location.lat();
    //   this.longitude = place.geometry.location.lng();
    //   alert(this.latitude + ", " + this.longitude);
    //   console.log(place);
    // });
  }

  setLocation() {

    let latLng = new google.maps.LatLng(53.550513, 9.994241);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // this.mapElement = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    

    // this.marker = new google.maps.Marker({
    //   position: latLng,
    //   map: this.map,
    // });
  }
}
