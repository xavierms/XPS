import { environment } from '../../environments/environment';
export let SERVER = environment.servername;
let Api = environment.apiXPS;

export let APIURL = {
    Register:{
        READ: Api + 'XPSCaso/ReadCaso?'
    }
}

