using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreX.Modelos
{
   public class Usuario
    {
        public int Usuario_Numero { get; set; }
        public string Usuario_Nickname { get; set; }
        public string Usuario_Nombre { get; set; }
        public string Usuario_Apellido { get; set; }
        public string Usuario_Email { get; set; }
        public string Usuario_Password { get; set; }
        public int    Usuario_Rol_Numero { get; set; }

    }
}
