import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login/login.service';
import { catchError } from 'rxjs';
import { UserLoginData } from '../../interfaces/auth/login/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private _snackBar: MatSnackBar, private localStorage: LocalStorageService ) {
    this.formulario = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      agree: [false],
    });
  }

  getCampo(nomeCampo: string) {
    return this.formulario.get(nomeCampo) as FormControl;
  }

  handleLogin() {

    const formData: UserLoginData = this.formulario.value as UserLoginData;

    this.loginService.authLoginUser(formData).pipe(
      catchError(error => {
        const mensagemErro = 'Email ou senha incorreto. Verifique e tente novamente';
        const acao = 'Fechar'; 

        this.openSnackBar(mensagemErro, acao);
        throw error;
      })
    )
      .subscribe(
        (response) => {
          this.localStorage.saveTokenAndUsername(response.token, formData.username);
          this.router.navigate(['/home']);
        }
      );
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  openSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      duration: 3000,
    });
  }

}
