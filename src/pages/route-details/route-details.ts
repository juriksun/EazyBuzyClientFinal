import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../home/home';
import { MapsAPILoader } from '@agm/core';
import { RouteServiseModule } from '../../modules/route_mdl.component';

@IonicPage()
@Component({
  selector: 'page-route-details',
  templateUrl: 'route-details.html',
})

export class RouteDetailsPage {
  mapCenter = {
    lat: 32,
    lng: 34
  };

  currPosition = {
    lat: 32,
    lng: 34
  };

  mapZoom = 14;

  segments: any = null;
  tasks: any = null;
  duration: any = null;
  distance: any = null;

  mapHeight: number;
  platformHeight: number;
  scrollContentMarginTop: number;
  maxMapHeight: number;

  headetHeight: number = 60;
  routeDetailsHeight: number = 102;

  private watch: any;
  currPositionAvalible:boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private zone: NgZone,
    private mapsAPILoader: MapsAPILoader,
    public routeServiseModule: RouteServiseModule,
    private platform: Platform,
    private geolocation: Geolocation
  ) {
    this.tasks = this.routeServiseModule.route.tasks;
    this.segments = this.routeServiseModule.route.segments;

    this.duration = ~~(this.routeServiseModule.route.sum_of_durations/60);
    this.distance = (this.routeServiseModule.route.sum_of_distance/1000).toFixed(1);

    this.platformHeight = this.platform.height();
    this.maxMapHeight = this.platformHeight - this.headetHeight - this.routeDetailsHeight;
    this.mapHeight = this.maxMapHeight;
  }

  ionViewDidLoad() {
    
  }

  ionViewDidEnter(){
    // this.geolocation.getCurrentPosition()
    // .then((resp) => {
    //   this.currPosition.lat = resp.coords.latitude;
    //   this.currPosition.lng = resp.coords.longitude;
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
    this.currPositionAvalible = false;
    setTimeout(() => {
      this.mapHeight = (this.platformHeight - this.headetHeight - this.routeDetailsHeight)/2;
      this.scrollContentMarginTop = this.headetHeight + this.routeDetailsHeight + this.mapHeight;

      this.mapZoom = 14;
      this.mapCenter.lat = this.tasks[0].place.location.lat - 0.01;
      this.mapCenter.lng = this.tasks[0].place.location.lng;
      this.getPosition();
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
          this.scrollContentMarginTop = this.headetHeight + this.routeDetailsHeight;
        break;
      }
      case (this.platformHeight - this.headetHeight - this.routeDetailsHeight):{
        this.mapHeight = (this.platformHeight - this.headetHeight - this.routeDetailsHeight)/2;
        this.scrollContentMarginTop = this.headetHeight + this.routeDetailsHeight + this.mapHeight;
        break;
      }
      default:{
        break;
      }
    }    
  }

  onOpenMap(){

    switch(this.mapHeight){
      case 0:{
          this.mapHeight = (this.platformHeight - this.headetHeight - this.routeDetailsHeight)/2;
          this.scrollContentMarginTop = this.headetHeight + this.routeDetailsHeight + this.mapHeight;
        break;
      }
      case ((this.platformHeight - this.headetHeight - this.routeDetailsHeight)/2):{
        this.mapHeight = this.platformHeight - this.headetHeight - this.routeDetailsHeight;
        this.scrollContentMarginTop = this.headetHeight + this.routeDetailsHeight + this.mapHeight;
        break;
      }
      default:{
        break;
      }
    }    
  }

  setMapCenter(lat, lng){
    this.mapZoom = 18;
    this.mapCenter.lat = lat - 0.0005;
    this.mapCenter.lng = lng;
  }

  onZoomChange(event){
    if(this.mapZoom !== event){
      this.mapZoom = event;
    }
  }

  getPosition(){
    // setInterval(()=>{
    //   console.log("hh");
    // }, 10000);
    this.watch = this.geolocation.watchPosition({
      enableHighAccuracy:true
    });
    this.watch.subscribe((data) => {
      this.currPositionAvalible = true;
      this.currPosition.lat = data.coords.latitude;
      this.currPosition.lng = data.coords.longitude;
      console.log(data.coords.latitude);
      console.log(data.coords.longitude);
    });
  }
}
