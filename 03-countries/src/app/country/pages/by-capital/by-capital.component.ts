import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/search-response.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  mean: string = 'Hello world';
  existError: Boolean = false;
  capitals: Country[] = [];
  constructor(private _countryService: CountryService) {}
  search(mean: string) {
    this.existError = false;
    this.mean = mean;
    this._countryService.searchCapital(mean).subscribe(
      (resp) => {
        this.capitals = resp;
      },
      (err) => {
        this.existError = true;
        this.capitals = [];
      }
    );
  }
}
