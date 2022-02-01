import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Casos } from 'src/interfaces/casos.interface';
import { XpsService } from '../xps.service';

@Component({
  selector: 'app-registro-casos',
  templateUrl: './registro-casos.component.html',
  styles: [
  ]
})
export class RegistroCasosComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder,
              private XpsService : XpsService,
              private router:Router) { }

  ngOnInit(): void {
    console.log(this.UserNumber);
    
  }
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  UserNumber!: number;
   casos: FormData = new FormData();


FormRegisterCasos: FormGroup = this.FormBuilder.group({
  registro_Caso_Nombre    : ['',Validators.required],
  registro_Caso_Apellido  : ['',Validators.required],
  registro_Caso_Telefono  : ['',[Validators.required,Validators.min(10)]],
  registro_Caso_Correo    : ['',Validators.required],
  registro_Caso_Motivo    : ['',Validators.required],
  registro_Caso_Comentario: ['',Validators.required],
  Registro_Documento_Ruta: ['',Validators.required]
})

createCasos(){

console.log('casos');

if (this.FormRegisterCasos.valid) {
  debugger
  this.casos.append("Registro_Caso_Nombre", this.FormRegisterCasos.get("registro_Caso_Nombre")?.value);
  this.casos.append("Registro_Caso_Apellido", this.FormRegisterCasos.get("registro_Caso_Apellido")?.value);
  this.casos.append("registro_Caso_Telefono", this.FormRegisterCasos.get("registro_Caso_Telefono")?.value);
  this.casos.append("Registro_Caso_Correo", this.FormRegisterCasos.get("registro_Caso_Correo")?.value);
  this.casos.append("Registro_Caso_Motivo", this.FormRegisterCasos.get("registro_Caso_Motivo")?.value);
  this.casos.append("Registro_Caso_Comentario", this.FormRegisterCasos.get("registro_Caso_Comentario")?.value);
  this.casos.append("usuario_Numero", "3");
  // this.casos.append("Registro_Documento_Ruta", this.FormRegisterCasos.get("Registro_Documento_Ruta")?.value);

    // Registro_Documento_Ruta: this.FormRegisterCasos.get("Registro_Documento_Ruta")?.value //'C:/Users/x.mejia/Downloads/stickersstickers5.jpg' 
  
  this.XpsService.postXPSCasos(this.casos)
                 .subscribe(resp=>{
                  debugger
                //  this.router.navigateByUrl('/Home')
                console.log('caso added!',resp);

                 })
}


}


UploadFile(event: any) {

  console.log(event.target.files);

  // // console.log(caso_number);caso_number: number
     let fileList: FileList = event.target.files;
  // //   if(validateFormat){
  // if (fileList.length > 0) {
     let file: File = fileList[0];

  //   if (file.size / 2000 > 10) {
  //     // this.toastr.error('El peso del archivo no debe ser mayor a 10MB');
  //   } else {
    
      this.casos.append("File", file);

    //   console.log(formData);
    //   this.XpsService.postXPSCasos(this.FormRegisterCasos.controls.Registro_Documento_Ruta.value + formData)
    //   .subscribe(resp=>{
    //    debugger
    //  //  this.router.navigateByUrl('/Home')
    //  console.log('caso added!',resp);

    //   })

      // this.XpsService.postDoc(formData).subscribe(
      //   (res) => {
          
      //   },
      //   (error) => {
          
      //   }
      // );

      // setTimeout(() => {
      //   this.ResetarListados();
      //   this.getListado();
      // }, 1000);
    // }
  // }
}

}
