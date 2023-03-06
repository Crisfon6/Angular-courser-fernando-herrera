import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dragonball.interface';

@Injectable()
export class DragonBallService {
  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 12314,
    },
    {
      name: 'Vegeta',
      power: 55555,
    },
  ];
  get characters(): Character[] {
    return [...this._characters];
  }
  constructor() {}
  addCharacter(character: Character) {
    this._characters.push(character);
  }
}
