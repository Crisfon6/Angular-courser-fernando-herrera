import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';
import {map,Observable,tap} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private http = inject(HttpClient);
  private  basUrl = "https://reqres.in/api/users";
  constructor() { }
  getUserById(id:number):Observable<User>{
  return this.http.get<SingleUserResponse>(`${this.basUrl}/${id}`)
  .pipe(
    map(resp=> resp.data),
    tap(console.log)
  );
  }
}
