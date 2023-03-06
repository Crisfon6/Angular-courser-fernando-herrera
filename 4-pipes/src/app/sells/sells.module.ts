import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { OrdenComponent } from './pages/orden/orden.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    //components
    NumbersComponent,
    NoCommonComponent,
    OrdenComponent,
    BasicsComponent,
    //pipes
    UppercasePipe,
    FlyPipe,
    OrderPipe,
  ],
  imports: [CommonModule, PrimeNgModule,OrderPipe],
  exports: [
    NumbersComponent,
    NoCommonComponent,
    OrdenComponent,
    BasicsComponent,
  ],
})
export class SellsModule {}
