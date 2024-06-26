import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { UserLoginData } from '../../../interfaces/auth/login/login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private readonly url = environment.api;

  constructor(private httpClient: HttpClient) { }

  authLoginUser(userData: UserLoginData): Observable<any>{
    return this.httpClient.post<any>(`${this.url}/users/login`, userData);
  }

}
