﻿using MedEase.Core.Models;
using AutoMapper;
using MedEase.Core.Dtos;
using System.Net.Mail;

namespace MedEase.Core.MappingProfiles
{
    public class AppUserProfile : Profile
    {
        public AppUserProfile()
        {
            CreateMap<AppUser, UserRegisterDto>().ReverseMap()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email))
                .ReverseMap();

            CreateMap<DoctorRegisterDto, AppUser>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email))
                .ReverseMap();
        }
    }
}
