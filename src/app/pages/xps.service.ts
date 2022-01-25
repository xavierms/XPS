import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Casos } from '../../interfaces/casos.interface';
import { APIURL } from '../shared/url';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class XpsService {

constructor(private http: HttpClient) { }

getXPSCasos(params: any): Observable<Casos[]>{
  const url =
  'filtro' + params.filtro       +
  '&Pageindex='+ params.Pageindex +
  '&PageSize='+  params.PageSize 
  return this.http.get<Casos[]>(APIURL.Casos.READ + url)  
}

postXPSUser(User: any){
    
  return this.http.post(APIURL.Casos.CREATE,User,{responseType: 'text'})
}
}
