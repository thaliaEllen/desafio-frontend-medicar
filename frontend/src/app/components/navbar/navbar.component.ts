import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  username: string = '';

  constructor(private localStorageData: LocalStorageService, private router: Router) {
   this.username = this.localStorageData.getUsername() as string;
   }

  ngOnInit(): void {
  }

  logout() {
    this.localStorageData.clearLocalStorage();
    this.router.navigate(['/login']);
  }
}
