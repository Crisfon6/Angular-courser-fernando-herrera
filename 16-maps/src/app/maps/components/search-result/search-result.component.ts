import { Component, inject } from '@angular/core';
import { MapsService, PlacesService } from '../../services';
import { Feature } from '../../interfaces';
import { LngLat } from 'mapbox-gl';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  private placesService= inject(PlacesService);
  private mapService =inject(MapsService);
  public selectedId:string='';
  get isLoadingPlaces():boolean{
    return this.placesService.isLoadingPlaces;
  }
  get places():Feature[]{
    return this.placesService.places;
  }
  flyTo(place:Feature){
    this.selectedId = place.id;
    const [lng,lat] = place.center;
    const lngLat:LngLat = new LngLat(lng,lat);
    this.mapService.flyTo(lngLat);
  }
  getRoute(place:Feature){
    if(!this.placesService.userLocation) throw Error('Userlocation no found');
    this.placesService.cleanPlaces();
    const start = this.placesService.userLocation!;
    const end = place.center as [number,number];
    this.mapService.getRouteBetweenTwoPoints(start,end)
  }
}
