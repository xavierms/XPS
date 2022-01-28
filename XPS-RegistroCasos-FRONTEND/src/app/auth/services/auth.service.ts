import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../../../interfaces/auth.interfaces';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../../../interfaces/user.interface';
import { APIURL } from 'src/app/shared/url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private _auth?: User;


get auth(): User{
  return {...this._auth! }
}
  constructor( private http: HttpClient) { }

  verificacionAutenticacion(): Observable<boolean>{
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<any>(`${ APIURL.Users.READ }`)
                    .pipe(
                      map( auth=>{
                        this._auth= auth;
                        return true;
                      })
                    );
  }

  login(){
    return this.http.get<any>(`${ APIURL.Users.READ }`)
    .pipe(
      tap( auth=> this._auth = auth ),
      // tap( auth=> localStorage.setItem('token', 'test'))
    )
  }

  logout(){
    this._auth= undefined;
  }
}
