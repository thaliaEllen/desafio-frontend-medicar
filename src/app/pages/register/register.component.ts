import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterData } from '../../interfaces/auth/register/register';
import { RegisterService } from '../../services/auth/register/register.service';
import { catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService, private _snackBar: MatSnackBar ) {
    this.formulario = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      secondPassword: ['', Validators.required]
    });

    this.getCampo('secondPassword').valueChanges.subscribe(() => {
      this.validarSenhas();
    });
  }

  getCampo(nomeCampo: string) {
    return this.formulario.get(nomeCampo) as FormControl;
  }

  validarSenhas() {
    const senha = this.getCampo('password').value;
    const confirmarSenha = this.getCampo('secondPassword').value;

    if (senha !== confirmarSenha) {
      this.getCampo('secondPassword').setErrors({ senhasDiferentes: true });
    } else {
      this.getCampo('secondPassword').setErrors(null);
    }
  }

  handleLogin() {
   
    const formData: UserRegisterData = this.formulario.value as UserRegisterData;

    this.registerService.authRegisterUser(formData).pipe(
      catchError(error => {
        const mensagemErro = 'Informação incorreta. Verifique e tente novamente';
        const acao = 'Fechar'; 

        this.openSnackBar(mensagemErro, acao);
        throw error;
      })
    )
      .subscribe(
        () => {
          const mensagemErro = 'Cadastro efetuado com sucesso!';
          const acao = 'Fechar'; 
  
          this.openSnackBar(mensagemErro, acao);
          this.router.navigate(['/login']);
        }
      );
  }

  handleBackLogin() {
      this.router.navigate(['/login']);
  }

  openSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      duration: 3000
    });
  }
}
