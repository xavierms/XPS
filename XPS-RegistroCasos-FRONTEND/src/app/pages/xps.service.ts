import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Casos } from "../../interfaces/casos.interface";
import { APIURL } from "../shared/url";
import { Observable } from "rxjs";
import { FormGroup } from "@angular/forms";
import { User } from "src/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class XpsService {
  constructor(private http: HttpClient) {}

  // Casos
  getXPSCasos(params: any): Observable<Casos[]> {
    const url =
      "filtro" +
      params.filtro +
      "&Pageindex=" +
      params.Pageindex +
      "&PageSize=" +
      params.PageSize;
    return this.http.get<Casos[]>(APIURL.Casos.READ + url);
  }
  postXPSCasos(Casos: Casos) {
    return this.http.post(APIURL.Casos.CREATE, Casos);
  }
  getFile(fileName: string):Observable<any>{

    return this.http.get(APIURL.Casos.FILE + fileName,{
      responseType:"blob" as "json",
    });
  }
  postDoc(data: FormData){

    return this.http.post(APIURL.Casos.INSERTFILE, data);
  }

  // Users
  postXPSUser(User: User) {
    return this.http.post(APIURL.Users.CREATE, User);
  }

  getXPSUser() {
    return this.http.get<User[]>(APIURL.Users.READ);
  }
}