import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-new-doctor-appointment',
  templateUrl: './modal-new-doctor-appointment.component.html',
  styleUrl: './modal-new-doctor-appointment.component.scss'
})
export class ModalNewDoctorAppointmentComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalNewDoctorAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  executeParentFunction(): void {
    if (this.data && this.data.executeFunction) {
      this.data.executeFunction();
    }
  }
}
