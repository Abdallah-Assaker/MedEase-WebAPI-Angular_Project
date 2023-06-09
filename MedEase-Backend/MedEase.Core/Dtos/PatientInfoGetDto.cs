﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedEase.Core.Dtos
{
    public class PatientInfoGetDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public int Building { get; set; }

        public string Street { get; set; }

        public string Region { get; set; }

        public string City { get; set; }

        public DateTime BirthDate { get; set; }

        public string Email { get; set; }

        //public string insuranceName { get; set; }
        public PatientInsuranceDto Insurance { get; set; }
        public PatientMedicalHistoryDto History { get; set; }
    }
}
