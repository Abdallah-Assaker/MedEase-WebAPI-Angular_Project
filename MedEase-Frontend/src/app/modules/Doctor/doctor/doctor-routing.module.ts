import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorComponent } from 'src/app/components/doctor/all-doctor/all-doctor.component';
import { DoctorIndexComponent } from 'src/app/components/doctor/doctor-index/doctor-index.component';
import { DoctorDetailsComponent } from 'src/app/components/doctor/doctor-details/doctor-details.component';

import { DoctorAppointmentsComponent } from 'src/app/components/doctor/doctor-appointments/doctor-appointments.component';
import { DoctorPendingAppointmentsComponent } from 'src/app/components/doctor/doctor-pending-appointments/doctor-pending-appointments.component';
import { DoctorConfirmedAppointmentsComponent } from 'src/app/components/doctor/doctor-confirmed-appointments/doctor-confirmed-appointments.component';
import { DoctorRegisterComponent } from 'src/app/components/authentication/doctor-register/doctor-register.component';
import { EditProfileComponent } from 'src/app/components/doctor/edit-profile/edit-profile.component';
import { DoctorScheduleComponent } from 'src/app/components/doctor/doctor-schedule/doctor-schedule.component';
import { DiagnosisComponent } from 'src/app/components/patient/diagnosis/diagnosis.component';
import { QuestionsLayoutComponent } from 'src/app/components/patient/questions/doctor/questions-layout/questions-layout.component';
import { DoctorAnswerdQuestionsComponent } from 'src/app/components/patient/questions/doctor/doctor-answerd-questions/doctor-answerd-questions.component';
import { DoctorUnAnswerdComponent } from 'src/app/components/patient/questions/doctor/doctor-un-answerd/doctor-un-answerd.component';
import { AnswerQuestionComponent } from 'src/app/components/patient/questions/doctor/answer-question/answer-question.component';
const routes: Routes = [
  {
    path: ':speciality/:city/:region/:name',
    component: AllDoctorComponent,
    children: [{ path: 'All', component: DoctorIndexComponent }],
  },
  { path: 'details/:id', component: DoctorDetailsComponent },
  {
    path: 'Appointment',
    component: DoctorAppointmentsComponent,
    children: [
      { path: 'Pending', component: DoctorPendingAppointmentsComponent },
      { path: 'Confirmed', component: DoctorConfirmedAppointmentsComponent },
    ],
  },

  { path:'questions',component:QuestionsLayoutComponent, children:[
    { path:'answered',component:DoctorAnswerdQuestionsComponent},
    { path:'answer/:id',component:AnswerQuestionComponent},
    { path:'unanswered',component:DoctorUnAnswerdComponent},
    { path:'**',component:DoctorAnswerdQuestionsComponent},
  ]},
  
  { path: 'register', component: DoctorRegisterComponent },
  
  {
    path:'profile',component: EditProfileComponent
  },
  {
    path:'schedule',component: DoctorScheduleComponent
  },
  {
    path:'Diagnosis/:id',component:DiagnosisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
