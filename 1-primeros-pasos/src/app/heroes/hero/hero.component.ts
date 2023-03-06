import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
})
export class HeroComponent {
  name: string = 'Iron Man';
  age: number = 50;
  getName(): string {
    return `${this.name} - ${this.age}`;
  }
  get nameCapitalized(): string {
    return this.name.toLocaleUpperCase();
  }
  changeName(): void {
    this.name = 'Crisfon6';
  }
  changeAge(): void {
    this.age = 23;
  }
}
