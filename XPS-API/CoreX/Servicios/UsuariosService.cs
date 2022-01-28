using CoreX.Modelos;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreX.Servicios
{
    public class UsuariosService : IUsuariosService
    {
        IConfiguration _configuration;
        public UsuariosService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void CreateUsuario(Usuario usuario)
        {
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("XPSConnection")))
            {
                SqlCommand cmd = new SqlCommand("Proc_Usuarios_Inserta", connection);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Usuario_Nickname", usuario.Usuario_Nickname);
                cmd.Parameters.AddWithValue("@Usuario_Nombre", usuario.Usuario_Nombre);
                cmd.Parameters.AddWithValue("@Usuario_Apellido", usuario.Usuario_Apellido);
                cmd.Parameters.AddWithValue("@Usuario_Email", usuario.Usuario_Email);
                cmd.Parameters.AddWithValue("@Usuario_Password", usuario.Usuario_Password);
                cmd.Parameters.AddWithValue("@Usuario_Rol_Numero", usuario.Usuario_Rol_Numero);
                try
                {
                    connection.Open();
                    cmd.ExecuteScalar();
                    connection.Close();
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
        }

        public List<UsuarioList> ReadUsuario()
        {
            List<UsuarioList> usuarios = new List<UsuarioList>();

            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("XPSConnection")))
            {
                SqlCommand cmd = new SqlCommand("Proc_Usuarios_Lista", connection);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                try
                {
                    connection.Open();
                    SqlDataReader dr = cmd.ExecuteReader();
                    while (dr.Read())
                    {
                        UsuarioList usuario = new UsuarioList
                        {
                            Usuario_Numero     = Convert.ToInt32(dr["Usuario_Numero"]),
                            Usuario_Nickname   = dr["Usuario_Nickname"].ToString(),
                            Usuario_Nombre     = dr["Usuario_Nombre"].ToString(),
                            Usuario_Apellido   = dr["Usuario_Apellido"].ToString(),
                            Usuario_Password   = dr["Usuario_Password"].ToString(),
                            Usuario_Email      = dr["Usuario_Email"].ToString(),
                            Usuario_Rol_Numero = Convert.ToInt32(dr["Usuario_Rol_Numero"])
                        };
                        usuarios.Add(usuario);
                    }
                    connection.Close();
                }
                catch (Exception ex)
                {
                    throw;
                }
                return usuarios;
            }
        }
    }
}
