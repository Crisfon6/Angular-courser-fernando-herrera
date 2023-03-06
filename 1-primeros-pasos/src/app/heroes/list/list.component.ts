import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Superman', 'Hulk'];
  heroDeleted: string = '';
  constructor() {}

  ngOnInit(): void {}
  deleteHero() {
    this.heroDeleted = this.heroes.shift() || '';
  }
}
