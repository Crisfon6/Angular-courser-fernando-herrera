import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroService } from '../../services/hero.service';
import { IHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  hero!: IHero;

  heroId!: string;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router
  ) {
    this.route.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
    // this.route.params.subscribe((params) => {
    //   this.heroId = params['id'];
    // });
  }
  ngOnInit(): void {}
  return() {
    this.router.navigate(['heroes', 'list']);
  }
}
