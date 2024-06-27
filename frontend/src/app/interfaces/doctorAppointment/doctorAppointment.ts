export interface DoctorAppointmentResume {
    id: number
    doctor: string
    date: string
    time: string
    speciality: string
};

export interface DoctorAppointment {
    id: number
    dia: string
    horario: string
    data_agendamento: string
    medico: Doctor
};

export interface DoctorAgenda {
    id: number
    dia: string
    horarios: string[]
    medico: Doctor
};

export interface Doctor {
    id: number
    crm: number
    nome: string
    especialidade: Specialty
};

export interface Specialty {
    id: number
    nome: string
};