import { Injectable } from '@angular/core';
import { UserRegisterData } from '../../../interfaces/auth/register/register';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly url = environment.api;

  constructor(private httpClient: HttpClient) { }

  authRegisterUser(userData: UserRegisterData): Observable<any>{
    return this.httpClient.post<any>(`${this.url}/users`, userData);
  }

}
