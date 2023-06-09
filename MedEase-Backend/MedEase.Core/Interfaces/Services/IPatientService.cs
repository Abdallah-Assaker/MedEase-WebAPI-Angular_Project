﻿using MedEase.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedEase.Core.Interfaces.Services
{
    public interface IPatientService
    {
        //Task<ApiResponse> ReserveAppointment(AppointmentReservationDto dto);
        Task<bool> EditPatient(PatientEditDto patient, int id);
        Task<PatientInfoGetDto> GetPatient(int ID);
        Task<bool> AddPatientInsurance(int PatientID, PatientInsuranceDto patientInsuranceDto);
        Task<bool> EditPatientInsurance(int PatientID, PatientInsuranceDto insuranceDto);
        Task<bool> AddMedicalHistory(PatientMedicalHistoryDto medicalHistoryDto, int PatientID);
        Task<bool> EditMedicalHistory(PatientMedicalHistoryDto medicalHistoryDto, int PatientID);
        Task<ApiResponse> AddAppointmentInestigation(AppointmentInvestigationDto dto);

    }
}
