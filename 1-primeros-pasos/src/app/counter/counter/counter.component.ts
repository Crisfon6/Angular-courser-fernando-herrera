import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <button (click)="operation(base)">+{{ base }}</button>
    <span>{{ counter }}</span>
    <button (click)="operation(-base)">-{{ base }}</button>
  `,
})
export class CounterComponent {
  counter: number = 0;
  base: number = 5;
  operation(value: number) {
    this.counter += value;
  }
}
