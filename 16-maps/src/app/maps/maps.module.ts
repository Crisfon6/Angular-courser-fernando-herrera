import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMylocationComponent } from './components/btn-mylocation/btn-mylocation.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';



@NgModule({
  declarations: [

    MapScreenComponent,
     MapViewComponent,
     LoadingComponent,
     BtnMylocationComponent,
     AngularLogoComponent,
     SearchBarComponent,
     SearchResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
MapScreenComponent
  ]
})
export class MapsModule { }
