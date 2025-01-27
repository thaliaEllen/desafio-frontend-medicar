import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { DoctorAppointmentService } from '../../services/doctorAppointment/doctor-appointment.service';
import { catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalNewDoctorAppointmentComponent } from '../../components/modal-new-doctor-appointment/modal-new-doctor-appointment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  formulario: FormGroup;
  username: string;
  dataAppointmens: any[] = [];

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, localStorageData: LocalStorageService, private doctorAppointment: DoctorAppointmentService, private _snackBar: MatSnackBar) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      concorda: [false],
    });
    this.username = localStorageData.getToken() as string;
  }

  ngOnInit(): void {
    this.loadDoctorAppointment();
  }

  getCampo(nomeCampo: string) {
    return this.formulario.get(nomeCampo) as FormControl;
  }


  loadDoctorAppointment() {
    this.doctorAppointment.getListDoctorAppointment().pipe(
      catchError(error => {
        const mensagemErro = 'Erro ao carregar lista. Recarregue a página.';
        const acao = 'Fechar'; 

        this.openSnackBar(mensagemErro, acao);
        throw error;
      })
    ).subscribe(data => {
      this.dataAppointmens = data;
    });
  }

  handleDeleteDoctorAppointment(id: number) {
    this.doctorAppointment.deleteDoctorAppointment(id).pipe(
      catchError(error => {
        const mensagemErro = 'Erro ao desmarcar consulta. Tente novamente.';
        const acao = 'Fechar'; 

        this.openSnackBar(mensagemErro, acao);
        throw error;
      })
    )
      .subscribe(
        () => {
          const mensagemErro = '✅ Consulta desmarcada com sucesso!';
          const acao = 'Fechar'; 
  
          this.openSnackBar(mensagemErro, acao);
         this.loadDoctorAppointment();
        }
      );
  }

  
  openSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      duration: 3000,
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalNewDoctorAppointmentComponent, {
      data: {
        executeFunction: () => this.executeInParent()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Diálogo fechado');
    });
  }

  executeInParent() {
    this.loadDoctorAppointment();
  }

}
