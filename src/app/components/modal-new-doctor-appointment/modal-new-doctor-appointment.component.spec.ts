import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewDoctorAppointmentComponent } from './modal-new-doctor-appointment.component';

describe('ModalNewDoctorAppointmentComponent', () => {
  let component: ModalNewDoctorAppointmentComponent;
  let fixture: ComponentFixture<ModalNewDoctorAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalNewDoctorAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewDoctorAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
