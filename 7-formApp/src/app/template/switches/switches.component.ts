import { Component } from '@angular/core';
type Gender = 'F' | 'M';
interface Person {
  gender: Gender;
  notifications: boolean;
  // terms: boolean;
}
@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent {
  person: Person = {
    gender: 'F',
    notifications: true,
    // terms: false,
  };
  terms: boolean = false;
}
