import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
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

  segments: any = null;
  tasks: any = null;

  mapHeight: number;
  platformHeight: number;
  scrollContentMarginTop: number;
  maxMapHeight: number;

  headetHeight: number = 60;
  routeDetailsHeight: number = 102;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private zone: NgZone,
    private mapsAPILoader: MapsAPILoader,
    public routeServiseModule: RouteServiseModule,
    private platform: Platform
  ) {
    this.tasks = this.routeServiseModule.route.tasks;
    this.segments = this.routeServiseModule.route.segments;

    this.platformHeight = this.platform.height();
    this.maxMapHeight = this.platformHeight - this.headetHeight - this.routeDetailsHeight;
    this.mapHeight = this.maxMapHeight;
  }

  ionViewDidLoad() {
    
  }

  ionViewDidEnter(){

    setTimeout(() => {
      this.mapHeight = (this.platformHeight - this.headetHeight - this.routeDetailsHeight)/2;
      this.scrollContentMarginTop = this.mapHeight + this.routeDetailsHeight;
    },500);
    
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
  onCloseMap(){

    switch(this.mapHeight){
      case ((this.platformHeight - this.headetHeight - this.routeDetailsHeight)/2):{
          this.mapHeight = 0;
          this.scrollContentMarginTop = this.routeDetailsHeight - this.mapHeight;
        break;
      }
      case (this.platformHeight - this.headetHeight - this.routeDetailsHeight):{
        this.mapHeight = (this.platformHeight - this.headetHeight - this.routeDetailsHeight)/2;
        this.scrollContentMarginTop = this.routeDetailsHeight - this.mapHeight;
        break;
      }
      default:{
        break;
      }
    }    
  }

  onOpenMap(){

    this.mapHeight = this.platformHeight - 170;

    console.log("open map");
    console.log("close map");
  }
}
