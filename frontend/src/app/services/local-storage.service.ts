import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private MEDICAR_DATA = 'MEDICAR_DATA';
  private MEDICAR_DATA_LOGIN = 'MEDICAR_DATA_LOGIN';

  constructor() { }

  saveTokenAndUsername(token: string, username: string): void {
    if (typeof localStorage !== 'undefined') {

      localStorage.setItem(this.MEDICAR_DATA, JSON.stringify({
        token: token,
        name: username
      }));
    }
  }

  saveLogin(password: string, username: string): void {
    if (typeof localStorage !== 'undefined') {

      localStorage.setItem(this.MEDICAR_DATA_LOGIN, JSON.stringify({
        username: username,
        password: password
      }));
    }
  }

  getUserLoginData(key: string): string {
    let response = '';

    if (typeof localStorage !== 'undefined') {

      const dataLogin = localStorage.getItem(this.MEDICAR_DATA_LOGIN);

      if(dataLogin){
        response = JSON.parse(dataLogin)[key];
      }
    }
    return response;
  }

  isLoggedIn(): boolean {
    let token = false;
    if (typeof localStorage !== 'undefined') {
      token = JSON.parse(localStorage.getItem(this.MEDICAR_DATA) as string);
    }
    return !token ? false : true;
  }

  getToken(): string | null {
    return typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem(this.MEDICAR_DATA) as string).token : null;
  }

  getUsername(): string | null {
    return typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem(this.MEDICAR_DATA) as string).name : null;
  }

  clearLocalStorage(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.MEDICAR_DATA);
    }
  }

}
