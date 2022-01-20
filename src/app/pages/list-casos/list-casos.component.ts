import { Component, OnInit } from '@angular/core';
import { XpsService } from '../xps.service';
import { Casos } from '../../../interfaces/casos.interface';

@Component({
  selector: 'app-list-casos',
  templateUrl: './list-casos.component.html',
  styles: [
  ]
})
export class ListCasosComponent implements OnInit {

  constructor(private XpsService: XpsService) { }
  isCollapsed = true;

casos:Casos[]=[];

listXPS: any ={
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


listXPSCasos(){
  this.XpsService.getXPSCasos(this.listXPS).subscribe(listCasos=>{
    this.casos = listCasos;
    console.log(listCasos);
    
  }) 
}


}
