﻿using AutoMapper;
using MedEase.Core.Dtos;
using MedEase.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedEase.Core.MappingProfiles
{
    public class CertificateProfile:Profile
    {
        public CertificateProfile()
        {
            CreateMap<CertificationDto, Certificates>().ReverseMap();
        }
       
    }
}
