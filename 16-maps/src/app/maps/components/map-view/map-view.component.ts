import { Component, ViewChild, inject,AfterViewInit, ElementRef } from '@angular/core';
import { PlacesService } from '../../services';
import {Map, Marker, Popup} from 'mapbox-gl';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit{
  private mapService =   inject(MapsService);
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;


  private placesService = inject(PlacesService);
 constructor(){
  console.log(this.placesService.userLocation);
 }
 ngAfterViewInit(): void {
  if (!this.placesService.userLocation) throw Error('Error: No exist the user location.');
const map = new Map({
  container: this.mapDivElement.nativeElement,
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: this.placesService.userLocation, // starting position [lng, lat]
  zoom: 14, // starting zoom
});
const popup = new Popup()
.setHTML(`
  <h6>I'm here</h6>
  <span>I'm in this place of the world</span>
`);
new Marker({color:'red'})
.setLngLat(this.placesService.userLocation)
.setPopup(popup)
.addTo(map);
this.mapService.setMap(map);
 }

}
