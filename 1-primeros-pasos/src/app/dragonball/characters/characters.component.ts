import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dragonball.interface';
import { DragonBallService } from '../services/dragonball.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  // @Input('data')
  // characters: Character[] = [];
  get characters(): Character[] {
    return this.dbzService.characters;
  }
  constructor(private dbzService: DragonBallService) {}
}
