import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor(private http: HttpClient) {}

  getUsersSocialNetworks() {
    return this.http.get('http://localhost:3000/grafica');
  }
  getUsersSocialNetworksRxJs(){
    return this.getUsersSocialNetworks()
    .pipe(
      map(data=>{
        return {
          labels:  Object.keys(data),
          datasets: [
            { data: Object.values(data) }
          ]
        }   
      })
    )
  }
}
