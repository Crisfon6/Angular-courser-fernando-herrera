import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes : Routes=[
  {
    path:'',
    children:[
      {
        path: 'product',
        component:ProductPageComponent
      },
      {
        path: '**',
        redirectTo: 'product'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
