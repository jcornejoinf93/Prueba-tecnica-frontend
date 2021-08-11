import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersModels } from '../users/models/users.models';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  getusers() {
    return this.http.get(`${ baseUrl }`);
  }

  postUsers(users: UsersModels) {
    return this.http.post(`${ baseUrl }`, users);
  }

  putUsers(id: number, user: UsersModels) {
    return this.http.put(`${ baseUrl }/${ id }`, user);
  }

  deleteUsers(id: number) {
    return this.http.delete(`${ baseUrl }/${ id }`);
  }

}
