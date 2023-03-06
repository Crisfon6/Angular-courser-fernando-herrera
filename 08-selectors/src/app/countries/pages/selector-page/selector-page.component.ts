import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { CountrySmall, Country } from '../../interface/countries.interface';
import { count, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  regions: string[] = [];
  countries: CountrySmall[] = [];
  country!: Country;
  myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: [{ value: '', disabled: false }, Validators.required],
  });
  // borders: string[] = [];
  borders: CountrySmall[] = [];
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {}
  ngOnInit(): void {
    this.regions = this.countriesService.regions;
    // this.myForm.get('region')?.valueChanges.subscribe((region:string)=>{
    //   console.log(region);
    //   this.countriesService.getCountriesByRegion(region)
    //   .subscribe(countries=>{
    //     console.log(countries);
    //     this.countries=countries;
    //   })
    // })
    this.myForm
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.myForm.get('country')?.reset('');
          this.loading = true;
        }),
        switchMap((region) =>
          this.countriesService.getCountriesByRegion(region)
        )
      )
      .subscribe((countries: CountrySmall[]) => {
        this.countries = countries;
        this.loading = false;
      });

    this.myForm
      .get('country')
      ?.valueChanges.pipe(
        tap((_) => {
          this.myForm.get('border')?.reset('');
          this.loading = true;
        }),
        switchMap((code) => this.countriesService.getCountryByCode(code)),
        switchMap((country) =>
          this.countriesService.getCountriesByBorders(country[0]?.borders)
        )
      )
      .subscribe((countries: CountrySmall[] | null) => {
        this.borders = countries || [];
        this.loading = false;
      });
  }
  submit() {
    console.log(this.myForm.value);
  }
}
