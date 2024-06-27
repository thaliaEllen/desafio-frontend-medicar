import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoctorAppointment, DoctorAppointmentResume } from '../../interfaces/doctorAppointment/doctorAppointment';

@Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrl: './table-home.component.scss'
})

export class TableHomeComponent {
  displayedColumns = ['speciality', 'doctor', 'date', 'time', 'id'];
  @Input() dataList: DoctorAppointment[];
  @Output() buttonClick = new EventEmitter<number>();

  constructor() {
    this.dataList = [];
  }

  onClick(id: number) {
    this.buttonClick.emit(id);
  }

}
