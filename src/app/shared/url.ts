import { environment } from '../../environments/environment';
export let SERVER = environment.servername;
let Api = environment.apiXPS;

export let APIURL = {
    Casos:{
        READ  : Api + 'XPSCaso/ReadCaso?',
        CREATE: Api + 'XPSCaso/CreateCaso?'
    },
    Users:{
        READ  : Api + 'Usuarios/ReadUsuario',
        CREATE: Api + 'Usuarios/CreateUsuarios?'      
    }
}

