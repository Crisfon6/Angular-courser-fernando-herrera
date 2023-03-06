import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountrySmall, Country } from '../interface/countries.interface';
import { Observable, combineLatest, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private url = 'https://restcountries.com/v3.1/';

  get regions() {
    return [...this._regions];
  }
  getCountriesByRegion(country: string) :Observable<CountrySmall[]>{
    const fields = '?fields=cca3,name,flag';
   return this.http.get<CountrySmall[]>(this.url +'/region/'+ country + fields);
  }
  getCountryByCode(code:string):Observable<Country[] >{
    if(!code || code.length===0){
      return  of([]);
    }
    return this.http.get<Country[]>(this.url+'alpha/'+code);
  }
  getCountryByCodeSmall(code:string):Observable<CountrySmall>{
    if(!code){
      of([]);
    }
    const fields = '?fields=cca3,name,flag';
    return this.http.get<CountrySmall>(this.url+'alpha/'+code+fields);
  }
  getCountriesByBorders(borders:any[]):Observable<CountrySmall[]>{
    if(!borders){
      return of([]);
    }
    let requests :Observable<CountrySmall>[] =[];
    borders.forEach(border=>{
      const request = this.getCountryByCodeSmall(border);
      requests.push(request);
    });
    return combineLatest( requests );
  }
  constructor(private http: HttpClient) {}
}
