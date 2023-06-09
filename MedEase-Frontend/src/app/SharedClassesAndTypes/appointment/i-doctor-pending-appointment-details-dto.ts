import { IDiagnosisDto } from './../diagnosis/i-diagnosis-dto';
import { IAppointmentInvestigationDto } from './../investigation/i-appointment-investigation-dto';
import { AppointmentStatus } from '../enums/appointment-status';
import { IPatientMedicalHistoryDto } from '../patient/i-patient-medical-history-dto';
import { Gender } from 'src/app/sharedClassesAndTypes/enums/gender';


export interface IDoctorPendingAppointmentDetailsDto {
  appointmentID: number;
  date: Date;
  status: AppointmentStatus;
  patientID: number;
  patientName: string;
  patientPhone: string;
  patientBirthDate: Date;
  patientGender: any;
  investigation: IAppointmentInvestigationDto;
  previousDiagnoses: IDiagnosisDto[];
  history: IPatientMedicalHistoryDto;
}

// public int AppointmentID { get; set; }
// public DateTime Date { get; set; }
// public Status Status { get; set; }
// public int PatientID { get; set; }
// public string PatientName { get; set; }
// public string PatientPhone { get; set; }
// public DateTime PatientBirthDate { get; set; }
// public Gender PatientGender { get; set; }
// public AppointmentInvestigationDto investigation { get; set; }
// public IEnumerable<DiagnosisDto> Diagnoses { get; set; }
// public PatientMedicalHistoryDto History { get; set; }
