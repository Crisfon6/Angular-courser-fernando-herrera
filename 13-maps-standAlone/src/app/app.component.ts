import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environt } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '10-maps-app';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    (mapboxgl as any).accessToken = environt.mapboxToken;
    
  }
}
