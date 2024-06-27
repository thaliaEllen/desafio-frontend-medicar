import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService {

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  canActivate(): boolean {
    if (this.localStorage.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }

  canInactivate(): boolean {
    if (this.localStorage.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false; 
    } else {
      return true;
    }
  }
}
