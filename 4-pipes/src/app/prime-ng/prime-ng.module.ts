import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  declarations: [],
  exports: [
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
