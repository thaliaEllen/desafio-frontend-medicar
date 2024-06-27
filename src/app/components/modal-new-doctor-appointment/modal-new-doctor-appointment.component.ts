import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Doctor, DoctorAgenda, Specialty } from '../../interfaces/doctorAppointment/doctorAppointment';
import { DoctorAppointmentService } from '../../services/doctorAppointment/doctor-appointment.service';
import { catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-new-doctor-appointment',
  templateUrl: './modal-new-doctor-appointment.component.html',
  styleUrl: './modal-new-doctor-appointment.component.scss'
})
export class ModalNewDoctorAppointmentComponent {
  listSpecialisty: Specialty[];
  listDoctor: Doctor[];
  listAgendaDoctor: DoctorAgenda[];
  listAgendaHoursDoctor: string[];
  selectSpecialityId: number;
  selectDoctorId: number;
  selectAgendaDoctorId: number;
  selectAgendaHoursDoctor: string;

  constructor(
    public dialogRef: MatDialogRef<ModalNewDoctorAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private doctorAppointment: DoctorAppointmentService,
    private _snackBar: MatSnackBar,
    
  ) {
    this.listSpecialisty = [];
    this.listDoctor = [];
    this.listAgendaDoctor = [];
    this.listAgendaHoursDoctor = [];
    this.selectSpecialityId = 0;
    this.selectDoctorId = 0;
    this.selectAgendaDoctorId = 0;
    this.selectAgendaHoursDoctor = '';
  }

  ngOnInit(): void {
    this.loadDoctorAppointmentList();
  }

  onChangeSpeciality() {
    this.loadDoctorList();
    this.listAgendaDoctor = [];
    this.listAgendaHoursDoctor = [];
    this.selectDoctorId = 0;
    this.selectAgendaDoctorId = 0;
    this.selectAgendaHoursDoctor = '';
    
  }

  onChangeDoctor() {
    this.loadDoctorAgendaList();
    this.listAgendaHoursDoctor = [];
    this.selectAgendaDoctorId = 0;
    this.selectAgendaHoursDoctor = '';
  }

  onChangeDataAgenda() {
    const hours = this.listAgendaDoctor.filter((iten)=> iten.id == this.selectAgendaDoctorId);
    this.listAgendaHoursDoctor = hours.length > 0 ? hours[0].horarios : [];
  }

  loadDoctorAppointmentList() {
    this.doctorAppointment.getListSpeciality().pipe(
      catchError(error => {
        const mensagemErro = 'Erro ao carregar lista. Recarregue a página.';
        const acao = 'Fechar'; 

        this.openSnackBar(mensagemErro, acao);
        throw error;
      })
    ).subscribe(data => {
      this.listSpecialisty = data;
    });
  }

  loadDoctorList() {
    this.doctorAppointment.getListDoctorBySpeciality(this.selectSpecialityId).pipe(
      catchError(error => {
        const mensagemErro = 'Erro ao carregar lista. Recarregue a página.';
        const acao = 'Fechar'; 

        this.openSnackBar(mensagemErro, acao);
        throw error;
      })
    ).subscribe(data => {
      this.listDoctor = data;
    });
  }

  loadDoctorAgendaList() {
    this.doctorAppointment.getListDoctorAppointmentByDoctorId(this.selectDoctorId).pipe(
      catchError(error => {
        const mensagemErro = 'Erro ao carregar lista. Recarregue a página.';
        const acao = 'Fechar'; 

        this.openSnackBar(mensagemErro, acao);
        throw error;
      })
    ).subscribe(data => {
      this.listAgendaDoctor = data;
    });
  }


  invalidForm() {
   return this.selectAgendaDoctorId == 0 && this.selectAgendaHoursDoctor == '' && this.selectDoctorId == 0 && this.selectSpecialityId == 0;
  }

  handleLogin() {

    this.doctorAppointment.registerDoctorAppointment(this.selectAgendaDoctorId, this.selectAgendaHoursDoctor).pipe(
      catchError(error => {
        const mensagemErro = 'Erro no cadastro. Verifique e tente novamente';
        const acao = 'Fechar'; 

        this.openSnackBar(mensagemErro, acao);
        throw error;
      })
    )
      .subscribe(
        () => {
          const mensagemErro = '✅ Consulta cadastrada com sucesso!';
        const acao = 'Fechar'; 

        this.openSnackBar(mensagemErro, acao);
        this.onNoClick();
        this.executeParentFunction();
        }
      );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  executeParentFunction(): void {
    if (this.data && this.data.executeFunction) {
      this.data.executeFunction();
    }
  }

  openSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      duration: 3000,
    });
  }
}
