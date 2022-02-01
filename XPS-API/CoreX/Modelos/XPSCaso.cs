using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreX.Modelos
{
    public class XPSCaso
    {

        [Required(ErrorMessage = "El nombre es requerido")]
        public string Registro_Caso_Nombre { get; set; }

        [Required(ErrorMessage = "El apellido es requerido")]
        public string Registro_Caso_Apellido { get; set; }

        //[StringLength(10, MinimumLength = 10, ErrorMessage = "El telefono no puede tener más de de 10 digitos")]
        public string Registro_Caso_Telefono { get; set; }

        [Required(ErrorMessage = "El Correo es requerido")]
        public string Registro_Caso_Correo { get; set; }
        [Required(ErrorMessage = "El Motivo del caso es requerido")]
        public string Registro_Caso_Motivo { get; set; }
        public int  Usuario_Numero { get; set; }
        public string Registro_Caso_Comentario { get; set; }
        public string Registro_Documento_Nombre { get; set; }
        public string Registro_Documento_Tamano { get; set; }
        public string Registro_Documento_Ruta { get; set; }

        [Required(ErrorMessage = "Este campo es requerido")]
        public IFormFile File { get; set; }
    }
}
