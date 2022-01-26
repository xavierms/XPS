using CoreX.Modelos;
using CoreX.Servicios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using XPS_API.Security;

namespace XPS_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class XPSCasoController : ControllerBase
    {
        private readonly Impersonation impersonation;
        readonly IConfiguration _configuration;
        IXPSCasoService _XPSCasoService;

        public XPSCasoController(IConfiguration configuration, IXPSCasoService xPSCasoService)
        {
            _XPSCasoService = xPSCasoService;
            _configuration = configuration;
            impersonation = new Impersonation(_configuration);

        }


        // POST: XPSCaso/CreateCaso
        /// <summary>
        /// Crea un caso o solicitud de XPS.
        /// </summary>
        /// <param name="xPSCaso">El nombre del archivo en el servidor</param>       
        ///<response code="200">OK.</response>     
        /// <response code="500">Error en el sistema. Ha ocurrido un error al procesar su solicitud.</response>
        /// <response code="404">NotFound. No se ha encontrado un archivo con el nombre insertado</response>  
        [HttpPost("CreateCaso")]
        public async Task<ActionResult<List<XPSCaso>>> CreateCaso([FromQuery] XPSCaso xPSCaso)
        {
       
            if (ModelState.IsValid)
            {
                try
                {
                    var nameFile = xPSCaso.File.FileName.Split('.');
                    string uniqueName = "XPSCASOS" + '-' + DateTime.Now.Ticks.ToString() + '.' + nameFile[nameFile.Length - 1];
                    var folderPathNew = Path.Combine(_XPSCasoService.RutaDocumentosXPS(), uniqueName);
                    await impersonation.GuardarArchivos(xPSCaso.File, folderPathNew);
                    double tamano = xPSCaso.File.Length;
                    tamano = tamano / 2000;
                   
                    xPSCaso.Registro_Documento_Nombre = xPSCaso.File.FileName;
                    xPSCaso.Registro_Documento_Ruta = uniqueName;
                    xPSCaso.Registro_Documento_Tamano = Math.Round(tamano, 2).ToString() + "mb";


                    _XPSCasoService.CreateCaso(xPSCaso);
                    return Ok();
                }
                catch (Exception xx)
                {
                    if (xx.Message.Contains("201"))
                    {
                        return Created(xx.Message, xPSCaso);

                    }
                    else if (xx.Message.Contains("202"))
                    {
                        return Accepted();

                    }
                    return StatusCode(500, xx.Message);
                }
            }
            return BadRequest();
        }


        // GET: XPSCaso/ReadCaso
        /// <summary>
        /// Lista los casos o solicitudes de XPS.
        /// </summary>
        /// <param name="xPSCaso">El nombre del archivo en el servidor</param>       
        ///<response code="200">OK.</response>     
        /// <response code="500">Error en el sistema. Ha ocurrido un error al procesar su solicitud.</response>
        /// <response code="404">NotFound. No se ha encontrado un archivo con el nombre insertado</response>  
        [HttpGet("ReadCaso")]
        public ActionResult<XPSCasoList> ReadCaso([FromQuery]  XPSCasoFilter xPSCasoFilter, string filtro)
        {

            return Ok(_XPSCasoService.ReadCaso(xPSCasoFilter, filtro));
            
        }
        // GET: Documentos/Descargar/{FileName}
        /// <summary>
        /// Busca el archivo solicitado y lo devuelve en blob.
        /// </summary>
        /// <remarks>
        /// Este controlador retorna el archivo solicitado y lo devuelve en blob
        /// </remarks>
        /// <param name="FileName">El nombre del archivo en el servidor</param>       
        ///<response code="200">OK. Devuelve eL archivo como un fileResult(blob)</response>     
        /// <response code="500">Error en el sistema. Ha ocurrido un error al procesar su solicitud.</response>
        /// <response code="404">NotFound. No se ha encontrado un archivo con el nombre insertado</response>       
        [HttpGet("DescargarDocumento/{FileName}")]
        public async Task<FileResult> DescargarDocumento(string FileName)
        {

            var path = Path.Combine(_XPSCasoService.RutaDocumentosXPS(), FileName);
            var res = await impersonation.DescargarArchivo(path);

            return File(res, MediaTypeNames.Application.Octet, "Archivo");

        }

    }
}
