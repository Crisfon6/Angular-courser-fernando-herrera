import { Component, OnInit } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  heroResult: IHero[] = [];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeores().subscribe((res) => (this.heroResult = res));
  }
}
