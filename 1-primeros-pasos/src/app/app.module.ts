import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroComponent } from './heroes/hero/hero.component';
import { HerosModule } from './heroes/heros.module';
import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/counter.module';
import { DragonballModule } from './dragonball/dragonball.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HerosModule, CounterModule, DragonballModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
