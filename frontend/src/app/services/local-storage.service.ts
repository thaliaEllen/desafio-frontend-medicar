import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private MEDICAR_DATA = 'MEDICAR_DATA';

  constructor() { }

  saveTokenAndUsername(token: string, username: string): void {
    if (typeof localStorage !== 'undefined') {
      const valor = localStorage.getItem('chave');

      localStorage.setItem(this.MEDICAR_DATA, JSON.stringify({
        token: token,
        name: username
      }));
    }
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
