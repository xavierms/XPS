import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../../../interfaces/auth.interfaces';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private apiXPS: string = environment.apiXPS;
private _auth?: Auth;


get auth(): Auth{
  return {...this._auth! }
}
  constructor( private http: HttpClient) { }

  verificacionAutenticacion(): Observable<boolean>{
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<Auth>(`${ this.apiXPS }/usuarios/${"luis1"}`)
                    .pipe(
                      map( auth=>{
                        this._auth= auth;
                        return true;
                      })
                    );
  }

  login(){
    return this.http.get<Auth>(`${ this.apiXPS }/usuarios/${"luis1"}`)
    .pipe(
      tap( auth=> this._auth = auth ),
      tap( auth=> localStorage.setItem('token', auth.id.toString()))
    )
  }

  logout(){
    this._auth= undefined;
  }
}
