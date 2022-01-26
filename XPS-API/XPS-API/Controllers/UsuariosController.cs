using CoreX.Modelos;
using CoreX.Servicios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XPS_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

        IUsuariosService _usuariosService;
        readonly IConfiguration _configuration;
        public UsuariosController(IUsuariosService usuariosService, IConfiguration configuration)
        {
            _configuration = configuration;
            _usuariosService = usuariosService;
        }
        // POST: Usuarios/CreateUsuarios
        /// <summary>
        /// Crea un usuario sea un Evaluador o un usuario ordinario.
        /// </summary>
        /// <param name="usuario">El nombre del archivo en el servidor</param>       
        ///<response code="200">OK. </response>     
        /// <response code="500">Error en el sistema. Ha ocurrido un error al procesar su solicitud.</response>
        /// <response code="404">NotFound. </response>  
        [HttpPost("CreateUsuarios")]
        public ActionResult CreateUsuario([FromQuery] Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _usuariosService.CreateUsuario(usuario);
                    return Ok();
                }
                catch (Exception xx)
                {
                    if (xx.Message.Contains("201"))
                    {
                        return Created(xx.Message, usuario);

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
        // GET: Usuarios/ReadUsuario
        /// <summary>
        /// Lista los usuarios en XPS.
        /// </summary>
        /// <param name="usuario">El nombre del archivo en el servidor</param>       
        ///<response code="200">OK.</response>     
        /// <response code="500">Error en el sistema. Ha ocurrido un error al procesar su solicitud.</response>
        /// <response code="404">NotFound. No se ha encontrado un archivo buscado</response>  
        [HttpGet("ReadUsuario")]
        public ActionResult<Usuario> ReadUsuario()
        {
            try
            {               
                return Ok(_usuariosService.ReadUsuario());
            }
            catch (Exception xx)
            {
                return NotFound(xx);
            }

        }

       
    }
}
