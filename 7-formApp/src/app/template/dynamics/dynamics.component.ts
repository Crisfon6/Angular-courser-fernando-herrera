import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
interface Person {
  name: string;
  favorites: Favorite[];
}
interface Favorite {
  id: number;
  name: string;
}
@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent {
  newGame!: string;
  person: Person = {
    name: 'cris',
    favorites: [
      {
        id: 0,
        name: 'Gears',
      },
      {
        id: 1,
        name: 'halo',
      },
    ],
  };
  @ViewChild('myForm') myForm!: NgForm;
  valid = false;
  name = '';
  save() {
    console.log('saving form');
  }
  delete(i: number) {
    this.person.favorites.splice(i, 1);
  }
  add() {
    const newGame: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame,
    };
    this.person.favorites.push(newGame);
  }
}
