import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';
import { DoctorAppointment } from '../../interfaces/doctorAppointment/doctorAppointment';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentService {


  private readonly url = environment.api;

  constructor(private httpClient: HttpClient, private localStorageData: LocalStorageService) { }

  getDataWithToken(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Token ${this.localStorageData.getToken()}`
    });
    
    return this.httpClient.get<DoctorAppointment[]>(`${this.url}/consultas`, { headers: headers }).pipe(
      map((dados) => dados.map(item => ({ id: item.id, doctor: item.medico.nome, date: item.dia, time: item.horario, speciality: item.medico.especialidade.nome })))
    );
  }

  deleteDataWithToken(id: number): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Token ${this.localStorageData.getToken()}`
    });
    
    return this.httpClient.delete<void>(`${this.url}/consultas/${id}`, { headers: headers });
  }
}
