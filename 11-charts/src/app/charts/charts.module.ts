import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { DonutsHttpComponent } from './pages/donuts-http/donuts-http.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarComponent,
    DonutsComponent,
    DonutsHttpComponent,
    ChartBarComponent,
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgChartsModule
  ]
})
export class ChartsModule { }
