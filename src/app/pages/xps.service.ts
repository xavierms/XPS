import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Casos } from '../../interfaces/casos.interface';
import { APIURL } from '../shared/url';
import { Observable } from 'rxjs';

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
  return this.http.get<Casos[]>(APIURL.Register.READ + url)  
}
}
