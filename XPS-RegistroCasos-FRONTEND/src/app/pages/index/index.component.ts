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
import { ToastrService } from 'ngx-toastr';


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
    private EmailValidatorService: EmailValidatorService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.readUser();
    this.getUserName(this.UserName);
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
    console.log(this.toastr.error('Good'));

    
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
            element.usuario_Rol_Numero == 2
            
          ) {
            
            this.UserName = element.usuario_Nickname;
            this.getUserName(this.UserName)
            this.toastr.success('Good');
            console.log(this.toastr.error('Good'));
            
            setTimeout(() => {
              
              this.router.navigateByUrl("/List");
            }, 1000);
          } else if (
            this.formAuth.controls.email.value == element.usuario_Email &&
            this.formAuth.controls.password.value == element.usuario_Password
          ) {
            this.router.navigateByUrl("/Register-casos");
          }
          else{
               this.toastr.error('Email or Password is wrong!','test');
            
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


  
}
