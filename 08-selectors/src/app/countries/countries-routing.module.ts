import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

const routes:Routes = [
  {
    path:'',
    children:[
      {
        path:'selector',
        component:SelectorPageComponent
      },
      {
        path:'**',
        redirectTo:'selector'
      }
    ]
  }
 
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CountriesRoutingModule { }
