using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Win32.SafeHandles;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Principal;
using System.Threading.Tasks;

namespace XPS_API.Security
{
    public class Impersonation
    {
        IConfiguration _configuration;

        public Impersonation(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [DllImport("advapi32.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        public static extern bool LogonUser(String lpszUsername, String lpszDomain, String lpszPassword,
         int dwLogonType, int dwLogonProvider, out SafeAccessTokenHandle phToken);
        public async Task<string> GuardarArchivos(IFormFile file, string filePath)
        {
            // Get the user token for the specified user, domain, and password using the   
            // unmanaged LogonUser method.   
            // The local machine name can be used for the domain name to impersonate a user on this machine.
            string domainName = _configuration.GetSection("domain").Value;

            string userName = _configuration.GetSection("user").Value;

            string pass = _configuration.GetSection("password").Value;

            const int LOGON32_PROVIDER_DEFAULT = 0;
            //Este parametro causa que LogonUser cree un token primario 
            const int LOGON32_LOGON_INTERACTIVE = 2;
            // Llama a LogonUser para obtener un manejador para un token de acceso.   
            SafeAccessTokenHandle safeAccessTokenHandle;
            bool returnValue = LogonUser(userName, domainName, pass,
                LOGON32_LOGON_INTERACTIVE, LOGON32_PROVIDER_DEFAULT,
                out safeAccessTokenHandle);

            if (false == returnValue)
            {
                int ret = Marshal.GetLastWin32Error();
                throw new System.ComponentModel.Win32Exception(ret);
            }

#pragma warning disable CA1416 // Validar la compatibilidad de la plataforma
            await WindowsIdentity.RunImpersonated(
              safeAccessTokenHandle,
              // User action
              async () =>
              {
                  try
                  {
                      if (file.Length > 0)
                      {
                          using (var strm = new FileStream(filePath, mode: FileMode.Create))
                          {

                              await file.CopyToAsync(strm);
                          }
                      }
                  }

                  catch (Exception ex)
                  {

                      throw (ex);
                  }

              }
              );
#pragma warning restore CA1416 // Validar la compatibilidad de la plataforma

            return filePath;

        }
        public async Task<byte[]> DescargarArchivo(string rutaDocumento)
        {
            byte[] fileBytes = new byte[byte.MaxValue];

            // Get the user token for the specified user, domain, and password using the   
            // unmanaged LogonUser method.   
            // The local machine name can be used for the domain name to impersonate a user on this machine.
            string domainName = _configuration.GetSection("domain").Value;

            string userName = _configuration.GetSection("user").Value;

            string pass = _configuration.GetSection("password").Value;

            const int LOGON32_PROVIDER_DEFAULT = 0;
            //Este parametro causa que LogonUser cree un token primario 
            const int LOGON32_LOGON_INTERACTIVE = 2;
            // Llama a LogonUser para obtener un manejador para un token de acceso.   

            SafeAccessTokenHandle safeAccessTokenHandle;
            bool returnValue = LogonUser(userName, domainName, pass,
                LOGON32_LOGON_INTERACTIVE, LOGON32_PROVIDER_DEFAULT,
                out safeAccessTokenHandle);

            if (false == returnValue)
            {
                int ret = Marshal.GetLastWin32Error();
                throw new System.ComponentModel.Win32Exception(ret);
            }
#pragma warning disable CA1416 // Validar la compatibilidad de la plataforma
            await WindowsIdentity.RunImpersonated(
               safeAccessTokenHandle,
               // User action
               async () =>
               {
                   try
                   {
                       if (File.Exists(rutaDocumento))
                       {
                           fileBytes = await File.ReadAllBytesAsync(rutaDocumento);
                       }
                       else
                       {
                           throw new Exception("Este Arhivo no existe 404");
                       }

                   }
                   catch (Exception ex)
                   {
                       throw ex;
                   }
               }
               );
#pragma warning restore CA1416 // Validar la compatibilidad de la plataforma

            return fileBytes;

        }
    }
}
