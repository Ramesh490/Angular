import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:3980/sanju/api/v1/employees";

  constructor(private httpClient : HttpClient) { }

  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`)
  }

  createUser(user:User):Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,user)
  }
}
