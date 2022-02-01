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


FormRegisterCasos: FormGroup = this.FormBuilder.group({
  registro_Caso_Nombre    : ['',Validators.required],
  registro_Caso_Apellido  : ['',Validators.required],
  registro_Caso_Telefono  : ['',[Validators.required,Validators.min(10)]],
  registro_Caso_Correo    : ['',Validators.required],
  registro_Caso_Motivo    : ['',Validators.required],
  registro_Caso_Comentario: ['',Validators.required]
})

createCasos(){
//debugger
console.log('casos');

if (this.FormRegisterCasos.valid) {
  let casos: Casos ={
    registro_Caso_Nombre    : this.FormRegisterCasos.get("registro_Caso_Nombre")?.value,
    registro_Caso_Apellido  : this.FormRegisterCasos.get("registro_Caso_Apellido")?.value,
    registro_Caso_Telefono  : this.FormRegisterCasos.get("registro_Caso_Telefono")?.value,
    registro_Caso_Correo    : this.FormRegisterCasos.get("registro_Caso_Correo")?.value,
    registro_Caso_Motivo    : this.FormRegisterCasos.get("registro_Caso_Motivo")?.value,
    registro_Caso_Comentario: this.FormRegisterCasos.get("registro_Caso_Comentario")?.value,
    usuario_Numero:   this.UserNumber = this.XpsService.UserNumber,
   // file: this.UploadFile('',this.UserNumber)
  }
  this.XpsService.postXPSCasos(casos)
                 .subscribe(resp=>{
                //  this.router.navigateByUrl('/Home')
                console.log('caso added!',resp);

                 })
}


}


UploadFile(event: any,caso_number: number) {
  debugger
  // console.log(caso_number);caso_number: number
  let fileList: FileList = event.target.files;
  //   if(validateFormat){
  if (fileList.length > 0) {
    let file: File = fileList[0];

    if (file.size / 1048576 > 10) {
      // this.toastr.error('El peso del archivo no debe ser mayor a 10MB');
    } else {
      let formData: FormData = new FormData();
      formData.append("Files", file);
      formData.append("registro_Caso_Numero", caso_number.toString());
      console.log(formData);
      this.XpsService.postDoc(formData).subscribe(
        (res) => {
          // this.toastr.success('Documento enviado correctamente');
        },
        (error) => {
          // this.toastr.error(error.error);
        }
      );

      // setTimeout(() => {
      //   this.ResetarListados();
      //   this.getListado();
      // }, 1000);
    }
  }
}

}
