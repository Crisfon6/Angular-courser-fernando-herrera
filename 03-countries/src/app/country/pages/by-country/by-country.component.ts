import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/search-response.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  mean: string = '';
  existError: Boolean = false;
  countries: Country[] = [];
  suggestion: Country[] = [];
  showSuggestion: boolean = false;
  constructor(private _countryService: CountryService) {}
  search(mean: string) {
    this.existError = false;
    this.showSuggestion = false;
    this.mean = mean;
    this._countryService.searchCountry(mean).subscribe(
      (resp) => {
        this.countries = resp;
      },
      (err) => {
        this.existError = true;
        this.countries = [];
      }
    );
  }
  suggest(mean: string) {
    this.showSuggestion = true;
    this.existError = false;
    this.mean = mean;
    this._countryService.searchCountry(mean).subscribe((countries) => {
      this.suggestion = countries.splice(0, 3);
    });
  }
  searchSuggestion(mean: string) {
    this.search(mean);
  }
}
