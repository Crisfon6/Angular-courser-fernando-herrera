import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dragonball.interface';
import { DragonBallService } from '../services/dragonball.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  newCharacter: Character = {
    name: 'Krile',
    power: 10,
  };

  // constructor(private dbzService: DragonBallService) {}
}
