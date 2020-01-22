import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private URL : string;
  private logged : any;
  constructor(private http :HttpClient) { 

    this.URL = "http://localhost:8080/";
   }



  public login ( user: User) :Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
  };
       return this.http.post<any>(this.URL + "/login",user,httpOptions);
       
       
      }
}
