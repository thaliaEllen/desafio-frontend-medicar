import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';
import { Doctor, DoctorAgenda, DoctorAppointment, Specialty } from '../../interfaces/doctorAppointment/doctorAppointment';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentService {


  private readonly url = environment.api;

  constructor(private httpClient: HttpClient, private localStorageData: LocalStorageService) { }

  getListDoctorAppointment(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Token ${this.localStorageData.getToken()}`
    });
    
    return this.httpClient.get<DoctorAppointment[]>(`${this.url}/consultas`, { headers: headers }).pipe(
      map((dados) => dados.map(item => ({ id: item.id, doctor: item.medico.nome, date: item.dia, time: item.horario, speciality: item.medico.especialidade.nome })))
    );
  }

  getListSpeciality(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Token ${this.localStorageData.getToken()}`
    });
    
    return this.httpClient.get<Specialty[]>(`${this.url}/especialidades`, { headers: headers });
  }

  getListDoctorBySpeciality(idSpeciality: number): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Token ${this.localStorageData.getToken()}`
    });
    
    return this.httpClient.get<Doctor[]>(`${this.url}/medicos/especialidade/${idSpeciality}`, { headers: headers });
  }

  getListDoctorAppointmentByDoctorId(idDoctor: number): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Token ${this.localStorageData.getToken()}`
    });
    
    return this.httpClient.get<DoctorAgenda[]>(`${this.url}/agendas/medico/${idDoctor}`, { headers: headers });
  }

  registerDoctorAppointment(id: number, hour: string): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Token ${this.localStorageData.getToken()}`
    });

    const body = {
      agenda_id: id,
      horario: hour
    };
    
    return this.httpClient.post<void>(`${this.url}/consultas/`, body, { headers: headers });
  }

  deleteDoctorAppointment(id: number): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Token ${this.localStorageData.getToken()}`
    });
    
    return this.httpClient.delete<void>(`${this.url}/consultas/${id}`, { headers: headers });
  }
}
