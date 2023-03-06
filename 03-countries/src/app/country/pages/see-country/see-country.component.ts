import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/search-response.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  country!: Country;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _countryService: CountryService
  ) {}

  ngOnInit(): void {
    // this._activatedRoute.params.subscribe(({ id }) => {
    //   this._countryService.searchCountryByCode(id).subscribe((country) => {
    //     console.log(country);
    //   });
    // });
    this._activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._countryService.searchCountryByCode(id)),
        tap(console.log)
      )
      .subscribe((country) => (this.country = country));
  }
}
