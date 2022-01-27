import { Component, OnInit } from '@angular/core';
import { XpsService } from '../xps.service';
import { Casos } from '../../../interfaces/casos.interface';
import * as FileSaver from 'file-saver';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-list-casos',
  templateUrl: './list-casos.component.html',
  styles: [
    `
    #logout{
      cursor:pointer;
    }
    `
  ]
})
export class ListCasosComponent implements OnInit {

  constructor(private XpsService: XpsService,
              private AuthService: AuthService,
              private router: Router) { }
isCollapsed = true;
casos   :Casos[]=[];
listXPS : any ={
  filtro: '',
  Pageindex:1,
  PageSize:10
}
  ngOnInit(): void {
    // debugger
    this.listXPSCasos();
    console.log(this.auth);
    
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
  }

  download(documento: Casos) {
    this.XpsService.getFile(documento.registro_Documento_Ruta).subscribe((blob: any) => {
      console.log(documento);

      var file = new Blob([blob], { type: 'application/octet-stream' });
      FileSaver.saveAs(file, documento.registro_Documento_Ruta);
    });
  }

listXPSCasos(){
  this.XpsService.getXPSCasos(this.listXPS).subscribe(listCasos=>{
    this.casos = listCasos;
    console.log(listCasos);
    
  }) 
}

logout(){
  this.router.navigate(['./home']);
   }

   get auth(){
    return this.AuthService.auth;
  }

}
