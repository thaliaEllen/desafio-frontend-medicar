import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsInactiveService {

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  canActivate(): boolean {
    if (this.localStorage.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false; 
    } else {
      return true;
    }
  }
}
