import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      concorda: [false],
    });
  }

  getCampo(nomeCampo: string) {
    return this.formulario.get(nomeCampo) as FormControl;
  }
  
  submitFormulario(): void {
    if (this.formulario.valid) {
      console.log('Formulário válido:', this.formulario.value);
    } else {
      console.log('Formulário inválido');
    }
  }

  handleLogin(){
    console.log('Login');
  }

  handleRegister(){
    console.log('Register');
  }

}
