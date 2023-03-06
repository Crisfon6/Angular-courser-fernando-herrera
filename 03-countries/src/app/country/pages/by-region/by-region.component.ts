import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/search-response.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activedRegion: string = '';
  results: Country[] = [];
  constructor(private _countryService: CountryService) {}
  activateRegion(region: string) {
    if (region === this.activedRegion) {
      return;
    }
    this.results = [];
    this._countryService.searchRegion(region).subscribe((data) => {
      this.results = data;
    });

    this.activedRegion = region;
  }
  getClass(region: string) {
    return region === this.activedRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
