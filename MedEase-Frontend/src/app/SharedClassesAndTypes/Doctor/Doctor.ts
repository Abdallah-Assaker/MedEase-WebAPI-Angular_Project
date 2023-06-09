import { publishFacade } from "@angular/compiler";
import { ISubSpecialty } from "src/app/sharedClassesAndTypes/doctor/isub-specialty";
import { doctorWorking } from "./doctorworking";

export class Doctor{
    constructor(
        public id:number,
        public fees:number,
        public faculty:string,
        public name:string,
        public phoneNumber:string,
        public gender:any,
        public age:number,
        public building:number,
        public waitingTime:number,
        public rating:any,
        public street :string,
        public addressDto:any,
        public doctorSubspiciality:ISubSpecialty[],
        public specialityName:string,
        public doctorcertificates:any,
        public doctorcerInsurance:any,
        public visitors:number,
        public clincRating:number,
        public email:string,
        public profilePicture:any,
        public specialityID:number,
        public workingstatus:doctorWorking
        
    ){}
}