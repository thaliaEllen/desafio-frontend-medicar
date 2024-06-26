import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  formulario: FormGroup;
  username: string;

  constructor(private formBuilder: FormBuilder, private localStorage: LocalStorageService ) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      concorda: [false],
    });
    this.username = this.localStorage.getUsername() as string;
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
