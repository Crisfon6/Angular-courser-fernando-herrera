import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/search-response.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [],
})
export class CountryTableComponent implements OnInit {
  @Input('data') countries: Country[] = [];
  constructor() {}

  ngOnInit(): void {}
}
