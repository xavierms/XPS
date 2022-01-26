using CoreX.Modelos;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoreX.Servicios
{
    public interface IXPSCasoService
    {
      public  void CreateCaso(XPSCaso casos);
        public string RutaDocumentosXPS();
        public List<XPSCasoList> ReadCaso(XPSCasoFilter xPSCasoFilter, string filtro);



    }
}