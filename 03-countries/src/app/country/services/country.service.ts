import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/search-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';
  get getParams(): HttpParams {
    return new HttpParams().set(
      'fields',
      'name,population,alpha2Code,flag,population,capital'
    );
  }
  constructor(private _http: HttpClient) {}
  searchCountry(mean: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${mean}`;
    // return this._http.get(url).pipe(catchError((err: any) => of([])));
    return this._http.get<Country[]>(url, { params: this.getParams });
  }
  searchCapital(mean: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${mean}`;
    // return this._http.get(url).pipe(catchError((err: any) => of([])));
    return this._http.get<Country[]>(url, { params: this.getParams });
  }
  searchCountryByCode(code: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this._http.get<Country>(url);
  }
  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this._http.get<Country[]>(url, { params: this.getParams });
  }
}
