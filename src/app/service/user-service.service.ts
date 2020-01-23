import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable , throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class UserService {

  private URL : string;
  private logged : any;
  constructor(private http :HttpClient) { 

    this.URL = "http://localhost:8080/";
   }



  public login ( user: User) :Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
  };
       return this.http.post<string>(this.URL + "login",user,httpOptions);
       
       
      }
      errorHandle(error){return throwError("errorMessage");}
}
