﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MedEase.Core.Models
{
    public class Address
    {
        public int ID { get; set; }
        public string Region { get; set; }
        public string City { get; set; }

        [JsonIgnore]
        public virtual List<AppUser> Users { get; set; }
    }
}
