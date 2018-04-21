import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-alex',
  templateUrl: 'alex.html',
})
export class AlexPage {
  @ViewChild('map') mapRef: ElementRef;
  // map: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.showMap();
  }


  showMap(){
    // Loction - lat long
    const location = new google.maps.LatLng(51.507351, -0.127758);

    // Map options
    const options = {
      center: location,
      zoom: 15
    };

    const map = new google.maps.Map(
      this.mapRef.nativeElement,
      options
    );

    this.addMarker(location, map);
    this.addPolyline(map);
    this.addMarker(
      new google.maps.LatLng(37.772, -122.214),
      map
    );
  }

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map,
      title: 'blabla'
    });
  }

  addPolyline(map){
    return new google.maps.Polyline({
      map: map,
      path: [
        {lat: 37.772, lng: -122.214},
        {lat: 21.291, lng: -157.821},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027}
      ],
      geodesic: true,
      strokeColor: '#123456',
      strokeOpacity: 0.5,
      strokeWeight: 3
    });
  }
  // loadMap(){
 
  //   this.geolocation.getCurrentPosition().then((position) => {
 
  //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
  //     let mapOptions = {
  //       center: latLng,
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }
 
  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  //   }, (err) => {
  //     console.log(err);
  //   });
 
  // }

  // addMarker(){
 
  //   let marker = new google.maps.Marker({
  //     map: this.map,
  //     animation: google.maps.Animation.DROP,
  //     position: this.map.getCenter()
  //   });
   
  //   let content = "<h4>Information!</h4>";         
   
  //   this.addInfoWindow(marker, content);
   
  // }

  // addInfoWindow(marker, content){
 
  //   let infoWindow = new google.maps.InfoWindow({
  //     content: content
  //   });
   
  //   google.maps.event.addListener(marker, 'click', () => {
  //     infoWindow.open(this.map, marker);
  //   });
   
  // }
}
