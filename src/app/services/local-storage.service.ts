import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private MEDICAR_DATA = 'MEDICAR_DATA';

  constructor() { }

  saveTokenAndUsername(token: string, username: string): void {
    localStorage.setItem(this.MEDICAR_DATA,JSON.stringify({
      token: token,
      name: username
    }));
  }

  getToken(): string | null {
    return JSON.parse(localStorage.getItem(this.MEDICAR_DATA) as string).token;;
  }

  getUsername(): string | null {

    return JSON.parse(localStorage.getItem(this.MEDICAR_DATA) as string).name;
  }

  clearLocalStorage(): void {
    localStorage.removeItem(this.MEDICAR_DATA);
  }
}
