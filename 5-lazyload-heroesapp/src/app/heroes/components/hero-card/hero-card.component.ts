import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: IHero;
  constructor() {}

  ngOnInit(): void {}
}
