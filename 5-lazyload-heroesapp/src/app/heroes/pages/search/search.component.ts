import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { IHero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  mean: FormGroup;
  heros: IHero[] = [];
  meanString = '';
  heroSelected!: IHero;
  constructor(private fb: FormBuilder, private heroService: HeroService) {
    this.mean = this.fb.group({
      mean: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  searching() {
    this.heroService.getSuggestion(this.meanString).subscribe((heros) => {
      this.heros = heros;
    });
  }
  selectedOption(event: MatAutocompleteSelectedEvent) {
    const hero: IHero | string = event.option.value;

    if (typeof hero === 'string') {
      this.meanString = '';
    } else {
      this.meanString = hero.superhero;
      this.heroService.getHeroById(hero.id).subscribe((hero) => {
        this.heroSelected = hero;
      });
    }
  }
}
