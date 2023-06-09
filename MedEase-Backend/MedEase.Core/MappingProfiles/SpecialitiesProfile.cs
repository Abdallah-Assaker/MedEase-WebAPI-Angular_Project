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
    internal class SpecialitiesProfile : Profile
    {
        public SpecialitiesProfile()
        {
            CreateMap<Speciality, SpecialityDto>().ReverseMap();    
        }
    }
}
