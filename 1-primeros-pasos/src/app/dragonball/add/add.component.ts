import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dragonball.interface';
import { DragonBallService } from '../services/dragonball.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  @Input()
  newCharacter: Character = {
    name: '',
    power: 0,
  };
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService: DragonBallService) {}

  ngOnInit(): void {}
  add() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    this.dbzService.addCharacter(this.newCharacter);
    // this.onNewCharacter.emit(this.newCharacter);
    // debugger;
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
