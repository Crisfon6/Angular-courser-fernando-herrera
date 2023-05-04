import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { DonutsHttpComponent } from './pages/donuts-http/donuts-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bar',
        component: BarsComponent,
      },
      {
        path: 'double-bar',
        component: DoubleBarComponent,
      },
      {
        path: 'donut',
        component: DonutsComponent,
      },
      {
        path: 'donuts-http',
        component: DonutsHttpComponent,
      },
      {
        path: '**',
        redirectTo: 'bar',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
