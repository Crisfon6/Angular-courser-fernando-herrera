import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(sessionStorage.getItem('results')!) || [];
    // if (localStorage.getItem('history')) {
    //   this._history = JSON.parse(localStorage.getItem('history')!);
    // }
  }
  private _history: string[] = [];

  private _apiKey: string = 'TINrBntthHIh7JrSXAjP05n9Ju64IZDK';
  private _endopoint: string = 'https://api.giphy.com/v1/gifs';

  public results: Gif[] = [];

  get history(): string[] {
    return [...this._history];
  }
  searchGifs(query: string) {
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      localStorage.setItem('history', JSON.stringify(this.history));
    }
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGIFResponse>(`${this._endopoint}/search`, { params })
      .subscribe((res) => {
        this.results = res.data;
        sessionStorage.setItem('results', JSON.stringify(res.data));
      });
    this._history = this._history.splice(0, 10);
  }
}
