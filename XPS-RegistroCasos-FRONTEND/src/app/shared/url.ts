import { environment } from '../../environments/environment';
export let SERVER = environment.servername;
let Api = environment.apiXPS;

export let APIURL = {
    Casos:{
        FILE  : Api + 'XPSCaso/DescargarDocumento/',
        CREATE: Api + 'XPSCaso/CreateCaso?',
        READ  : Api + 'XPSCaso/ReadCaso?',
        //INSERTFILE: Api + 'XPSCaso/'
    },
    Users:{
        READ  : Api + 'Usuarios/ReadUsuario',
        CREATE: Api + 'Usuarios/CreateUsuarios?',
        READADMIN: Api + 'Usuarios/ReadUsuarioAdmin?'      
    }
}

