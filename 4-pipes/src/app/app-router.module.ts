import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BasicsComponent } from './sells/pages/basics/basics.component';
import { NumbersComponent } from './sells/pages/numbers/numbers.component';
import { NoCommonComponent } from './sells/pages/no-common/no-common.component';
import { OrdenComponent } from './sells/pages/orden/orden.component';

const routes: Route[] = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  { path: 'no-common', component: OrdenComponent },

  { path: 'custom', component: OrdenComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
