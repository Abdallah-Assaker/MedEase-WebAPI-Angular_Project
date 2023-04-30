import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Doctor } from 'src/app/SharedClassesAndTypes/Doctor/Doctor';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent {

  doctorId!:number
  doctor:Doctor=new Doctor(0,0,'','','','',0,0,0,0,'',0,0,'','','',0);
  errorMessage: any;
  constructor(private DoctorService:DoctorService,private router:Router ,private route:ActivatedRoute){
   
    
    
  }
  ngOnInit(): void {
    this.doctorId= this.route.snapshot.params['id']
        
    console.log(this.doctorId)
    this.DoctorService.GetDoctorByID(this.doctorId).subscribe({
      next:data=>{
        let dataJson = JSON.parse(JSON.stringify(data))
        this.doctor=dataJson.data
        
        
       

      },
      error:error=>this.errorMessage=error
    })
    
   
    
    
  }
}