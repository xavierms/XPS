using CoreX.Modelos;
using System.Collections.Generic;

namespace CoreX.Servicios
{
    public interface IUsuariosService
    {
        public void CreateUsuario(Usuario usuario);
        public List<Usuario> ReadUsuario();

    }
}