using CoreX.Modelos;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace CoreX.Servicios
{
    public class XPSCasoService : IXPSCasoService
    {
         IConfiguration _configuration;

        public XPSCasoService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void CreateCaso(XPSCaso casos)
        {
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("XPSConnection")))
            {
                SqlCommand cmd = new SqlCommand("Proc_XPS_Registros_Casos_Inserta", connection);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Registro_Caso_Nombre",     casos.Registro_Caso_Nombre);
                cmd.Parameters.AddWithValue("@Registro_Caso_Apellido",   casos.Registro_Caso_Apellido);
                cmd.Parameters.AddWithValue("@Registro_Caso_Telefono",   casos.Registro_Caso_Telefono);
                cmd.Parameters.AddWithValue("@Registro_Caso_Correo",     casos.Registro_Caso_Correo);
                cmd.Parameters.AddWithValue("@Registro_Caso_Motivo",     casos.Registro_Caso_Motivo);
                cmd.Parameters.AddWithValue("@Usuario_Numero",           casos.Usuario_Numero);
                cmd.Parameters.AddWithValue("@Registro_Caso_Comentario", casos.Registro_Caso_Comentario);
                cmd.Parameters.AddWithValue("@Registro_Documento_Nombre", casos.Registro_Documento_Nombre);
                cmd.Parameters.AddWithValue("@Registro_Documento_Tamano", casos.Registro_Documento_Tamano);
                cmd.Parameters.AddWithValue("@Registro_Documento_Ruta", casos.Registro_Documento_Ruta);

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
        public string RutaDocumentosXPS()
        {
            string ruta = "";

            using (SqlConnection conexion = new SqlConnection(_configuration.GetConnectionString("XPSConnection")))
            {
                SqlCommand comando = new SqlCommand("Proc_Ruta_Documento_XPS", conexion);
                comando.CommandType = CommandType.StoredProcedure;
                conexion.Open();
                SqlDataReader dataReader = comando.ExecuteReader();
                while (dataReader.Read())
                {

                    ruta = Convert.ToString(dataReader["Parametro_Valor"]);

                }
                conexion.Close();
            }

            return ruta;
        }


        public List<XPSCasoList> ReadCaso(XPSCasoFilter xPSCasoFilter, string filtro)
        {
            List<XPSCasoList> xPSCasos = new List<XPSCasoList>();
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("XPSConnection")))
            {
                SqlCommand cmd = new SqlCommand("Proc_XPS_Registros_Casos_Lista", con);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Pageindex", xPSCasoFilter.Pageindex);
                cmd.Parameters.AddWithValue("@PageSize", xPSCasoFilter.PageSize);
                cmd.Parameters.AddWithValue("@filtro", (filtro == null) ? "": filtro);
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    XPSCasoList xPS = new XPSCasoList
                    {
                        
                        Registro_Caso_Numero = Convert.ToInt32(dr["Registro_Caso_Numero"]),
                        Registro_Caso_Nombre =     dr["Registro_Caso_Nombre"].ToString(),
                        Registro_Caso_Apellido =   dr["Registro_Caso_Apellido"].ToString(),
                        Registro_Caso_Telefono =   dr["Registro_Caso_Telefono"].ToString(),
                        Registro_Caso_Correo =     dr["Registro_Caso_Correo"].ToString(),
                        Registro_Caso_Motivo =     dr["Registro_Caso_Motivo"].ToString(),
                        Registro_Documento_Ruta =  dr["Registro_Documento_Ruta"].ToString(),
                        Registro_Documento_Nombre =  dr["Registro_Documento_Nombre"].ToString(),
                        Usuario_Nickname =         dr["Usuario_Nickname"].ToString(),
                        Registro_Caso_Comentario = dr["Registro_Caso_Comentario"].ToString()
                    };
                    xPSCasos.Add(xPS);
                }
                con.Close();
            }

            return xPSCasos;
        }


    }
}
