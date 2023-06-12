import { Component, inject } from '@angular/core';
import { MapsService, PlacesService } from '../../services';
import { LngLat } from 'mapbox-gl';

@Component({
  selector: 'app-btn-mylocation',
  templateUrl: './btn-mylocation.component.html',
  styleUrls: ['./btn-mylocation.component.css']
})
export class BtnMylocationComponent {
  private mapService = inject(MapsService);
  private placesService = inject(PlacesService);

  constructor(){}
  goToMyLocation(){
    if(!this.placesService.isUserLocationReady) throw Error('No exist the user location');
    if(!this.mapService.isMapReady) throw Error('Unable map');
    let latLong: LngLat|undefined= new LngLat(...this.placesService!.userLocation!);
     this.mapService.flyTo(latLong);
  }
}
