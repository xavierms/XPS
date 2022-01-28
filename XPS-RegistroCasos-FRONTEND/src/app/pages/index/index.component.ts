import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import noUiSlider from "nouislider";
import * as FileSaver from "file-saver";

import { AuthService } from "../../auth/services/auth.service";
import { EmailValidatorService } from "../../shared/validator/email-validator.service";
import { ValidatorService } from "../../shared/validator/validator.service";
import { XpsService } from "../xps.service";
import { Casos } from "../../../interfaces/casos.interface";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html",
})
export class IndexComponent implements OnInit, OnDestroy {
  constructor(
    private AuthService: AuthService,
    private router: Router,
    private XpsService: XpsService,
    private fb: FormBuilder,
    private ValidatorService: ValidatorService,
    private EmailValidatorService: EmailValidatorService
  ) {}

  ngOnInit() {
    // this.readUser();
    this.getUserName(this.UserName);
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    // var slider = document.getElementById("sliderRegular");

    // noUiSlider.create(slider, {
    //   start: 40,
    //   connect: false,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    // var slider2 = document.getElementById("sliderDouble");

    // noUiSlider.create(slider2, {
    //   start: [20, 60],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });
  }
  focus;
  focus1;
  focus2;
  isCollapsed = true;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  UserName: string;

  formAuth: FormGroup = this.fb.group({
    // name    : ['', [Validators.required, Validators.pattern(this.ValidatorService.nombreApellidoPattern) ]],
    // email     : ['', [Validators.required, Validators.pattern(this.ValidatorService.emailPattern) ], [this.EmailValidatorService]],
    email:     ["", [Validators.required]],
    password:  ["", [Validators.required, Validators.minLength(6)]],
    cPassword: ["", [Validators.required]],
  });
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  login() {
    this.AuthService.login().subscribe((resp) => {
        resp.forEach((element) => {
          if (
            this.formAuth.controls.email.value == element.usuario_Email &&
            this.formAuth.controls.password.value == element.usuario_Password &&
            element.usuario_Rol_Numero == 1
          ) {
            this.UserName = element.usuario_Nickname;
          this.getUserName(this.UserName)
            this.router.navigateByUrl("/List");
          } else if (
            this.formAuth.controls.email.value == element.usuario_Email &&
            this.formAuth.controls.password.value == element.usuario_Password
          ) {
            this.router.navigateByUrl("/Register-casos");
          }
        })
    });
  }
  getUserName(user: string) {
    this.XpsService.GetNameUserAuth(this.UserName);
    let getlocal  =  localStorage.setItem('token1', this.UserName)
    console.log(getlocal);
    return this.UserName = user;
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  download(documento: Casos) {
    this.XpsService.getFile(documento.registro_Documento_Ruta).subscribe(
      (blob: any) => {
        console.log(documento);

        var file = new Blob([blob], { type: "application/octet-stream" });
        FileSaver.saveAs(file, documento.registro_Documento_Ruta);
      }
    );
  }
  UploadFile(event: any, Documento_Secuencia: number) {
    console.log(Documento_Secuencia);
    let fileList: FileList = event.target.files;
    //   if(validateFormat){
    if (fileList.length > 0) {
      let file: File = fileList[0];

      if (file.size / 1048576 > 10) {
        // this.toastr.error('El peso del archivo no debe ser mayor a 10MB');
      } else {
        let formData: FormData = new FormData();
        formData.append("Files", file);
        formData.append("Documento_Id", Documento_Secuencia.toString());
        // formData.append('Usuario', "luisff")
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
