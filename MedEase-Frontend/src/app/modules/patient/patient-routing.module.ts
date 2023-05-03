import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskQuestionComponent } from 'src/app/components/patient/ask-question/ask-question.component';
import { ProfileComponent } from 'src/app/components/patient/profile/profile.component';

const routes: Routes = [
  { path:'profile',component:ProfileComponent},
  { path:'ask',component:AskQuestionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
