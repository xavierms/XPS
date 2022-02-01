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
UserName!: string;
listXPS : any ={
  filtro: '',
  Pageindex:1,
  PageSize:10
}
  ngOnInit(): void {
    // debugger
    this.listXPSCasos();
    
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
  }

  download(documento: Casos) {
    this.XpsService.getFile(documento.file).subscribe((blob: any) => {
      console.log(documento);

      var file = new Blob([blob], { type: 'application/octet-stream' });
      FileSaver.saveAs(file, documento.file);
    });
  }

listXPSCasos(){
  this.UserName = this.XpsService.UserName;
  this.XpsService.getXPSCasos(this.listXPS).subscribe(listCasos=>{
    this.casos = listCasos;
  }) 
}

// GetUserName(userName: string){
//   this.XpsService.GetNameUserAuth(userName)
//   console.log(userName); 
// }

logout(){
  this.router.navigate(['./home']);
  //TODO: agregar aviso de que si esta seguro del logout
   }

   get auth(){
    return this.AuthService.auth;
  }

}
