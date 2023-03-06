import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environt } from '../../../../environments/environment';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
    #map{
      width:100%;
      height:100%;
    }`
  ]
})
export class FullScreenComponent implements OnInit{
  ngOnInit(): void {
    const map = new mapboxgl.Map({
      container: 'map',//containerId,
      style:'mapbox://styles/mapbox/streets-v12',
      center:[ -73.11461286708524,7.0886129669695865],      
      zoom:18,//starting zoom
    })
  }
  
  
}
