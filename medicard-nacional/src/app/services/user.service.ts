import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ActivateUser, User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*url = 'http://localhost:4000/api/users/';
  constructor(private http: HttpClient) { }
  

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteUser(ci: string): Observable<any> {
    return this.http.delete(this.url + ci);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }
  getUserID(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  updateUserID(id: string, user: User): Observable<any> {
    return this.http.put(this.url + id, user);
  }*/
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient){
    this.myAppUrl= environment.endpoint;
    this.myApiUrl= 'api/asegurados'
  }
  
  getUsers(): Observable<any> {

    //const token= localStorage.getItem('token')
    //const headers = new  HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}`);
  }

  //usuarios activos
  getActiveUsers(): Observable<any> {

    //const token= localStorage.getItem('token')
    //const headers = new  HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}/activos`);
  }

  deleteUser(ci: string): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/` + ci);
  }

  addUser(user: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
  }
  getUserID(id: string): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}/` + id);
  }
  updateActivationDate(id: string, user: ActivateUser): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}/` + id, user);
  }
}
