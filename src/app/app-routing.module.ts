import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardsService } from './routes/guards/auth-guards.service';
import { AuthGuardsInactiveService } from './routes/guards/auth-guards-inactive.service';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [AuthGuardsInactiveService]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardsInactiveService]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuardsInactiveService]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardsService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
