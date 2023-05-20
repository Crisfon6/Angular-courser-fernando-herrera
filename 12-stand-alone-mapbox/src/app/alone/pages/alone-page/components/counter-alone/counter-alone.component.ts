import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'counter-alone',
  standalone: true,
  // imports: [CommonModule],
  template: `
  <h1>
    Counter {{counter}}
    <button (click)="counter= counter + 1" class="btn btn-primary">
      Click me
    </button>
  </h1>
  `
})
export class CounterAloneComponent {
  @Input()
  public counter :number = 10;
}
