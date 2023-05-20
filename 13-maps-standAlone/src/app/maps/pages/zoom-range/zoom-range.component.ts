import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
      }
      .row {
        background-color: white;
        border-radius: 5px;
        bottom: 50px;
        position: fixed;
        left: 50px;
        padding: 10px;
        z-index: 999;
        width:400px;
      }
    `,
  ],
})
export class ZoomRangeComponent implements AfterViewInit,OnDestroy {
  ngOnDestroy(): void {
    this.map.off('move',()=>{});
    this.map.off('zoom',()=>{});

    this.map.off('zoomend',()=>{});

  }
  @ViewChild('map') divMap!: ElementRef;
  zoomValue = 10;
  map!: mapboxgl.Map;
  center :[number,number ]=[-73.11461286708524, 7.0886129669695865];
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log('div map', this.divMap);
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, //containerId,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.center,
      zoom: this.zoomValue, //starting zoom
    });
    this.map.on('zoom', (event) => {
      this.zoomValue = this.map.getZoom();
    });
    this.map.on('zoomend', (ev) => {
      if (this.map.getZoom() > 18) {
        this.map.zoomTo(18);
      }
    });
    this.map.on('move',(ev)=>{
      const target = ev?.target;
      const {lng,lat } = target.getCenter();
      this.center = [lng,lat];
    })
  }
  zoom(action: string) {
    if (action === '-') {
      this.map.zoomOut();
    } else {
      this.map.zoomIn();
    }
  }
  changeZoom(value: string) {
    this.map.zoomTo(Number(value));
  }
}
