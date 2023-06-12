import { Injectable, inject } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces';
import { PlacesAPIClient } from '../api';
import { MapsService } from './maps.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private placesApi = inject(PlacesAPIClient);
  private mapService = inject(MapsService);
  public userLocation: [number, number] | undefined = undefined;

  public isLoadingPlaces : boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor() {
    this.getUserLocation();
  }

  getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {

          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert(err);
          console.error(err);
          reject();
        }

      );
    });
  }
  getPlacesByQuery(query:string=''){
     if(query===''){
      this.places= [];
      this.isLoadingPlaces=false;
      return;
     }
    if(!this.userLocation) throw Error('Userlocation not found');
    this.isLoadingPlaces=true;
    this.placesApi.get<PlacesResponse>(`/${query}.json`,{
      params: {
        proximity: this.userLocation.join(',')
      }
    }).subscribe(resp=>{
      this.isLoadingPlaces =false;
      this.places = resp.features;
      this.mapService.createMarkersFromPlaces(resp.features,this.userLocation!);
    });

  }
  cleanPlaces(){
    this.places= [];
  }
}
