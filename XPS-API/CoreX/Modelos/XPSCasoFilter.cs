using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreX.Modelos
{
    public class XPSCasoFilter
    {
        public int Pageindex { get; set; }
        public int PageSize { get; set; }

    }
}
