import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private baseUrl: string = environment.apiEndpointHeroes;
  constructor(private http: HttpClient) {}
  getHeores(): Observable<IHero[]> {
    return this.http.get<IHero[]>(`${this.baseUrl}/heroes`);
  }
  getHeroById(id: string): Observable<IHero> {
    return this.http.get<IHero>(`${this.baseUrl}/heroes/${id}`);
  }
  getSuggestion(mean: string): Observable<IHero[]> {
    const limit = 6;
    return this.http.get<IHero[]>(
      `${this.baseUrl}/heroes?q=${mean}&_limit=${limit}`
    );
  }
  addHero(hero: IHero): Observable<IHero> {
    return this.http.post<IHero>(`${this.baseUrl}/heroes`, hero);
  }
  updateHero(hero: IHero): Observable<IHero> {
    return this.http.put<IHero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }
  deleteHero(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`);
  }
}
