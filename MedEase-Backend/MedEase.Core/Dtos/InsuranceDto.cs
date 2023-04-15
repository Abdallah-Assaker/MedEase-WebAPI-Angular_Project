﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedEase.Core.Dtos
{
    public class InsuranceDto
    {
        [Required, MinLength(4), MaxLength(150)]
        public string Company { get; set; }

    }
}
