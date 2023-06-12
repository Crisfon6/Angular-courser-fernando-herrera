import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc2ZvbjYiLCJhIjoiY2xldzRpZ3NwMjdibjNycG5hODRmNmMwbSJ9.fIgpz19eey6zUQTrSYcHFA';
if(!navigator.geolocation)
{
  alert('The browser not support the geolocation.');
  throw new Error('This browser not support the geolocation.');
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
