import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from "src/app/auth/services/auth.service";
import { User } from "src/interfaces/user.interface";
import { XpsService } from '../../xps.service';


@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  user: User[]=[];
  constructor(private FormBuilder: FormBuilder,
              private XpsService: XpsService,
              private router:Router,
              private AuthService: AuthService  ) {}
  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");

    var posX = e?.clientX - window.innerWidth / 2;
    var posY = e?.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }
  ngOnInit() {
   // this.readUser()
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
    this.readUser();
    this.onMouseMove(event);
    
  }

  formPostUser: FormGroup = this.FormBuilder.group({
    Usuario_Nickname  : ['',[Validators.required]],
    Usuario_Nombre    : ['',[Validators.required]],
    Usuario_Apellido  : ['',[Validators.required]], 
    Usuario_Email     : ['',[Validators.required]],
    Usuario_Password  : ['',[Validators.required, Validators.min(8)]],
    Usuario_Rol_Numero: [1,[Validators.required]]
  })

  createUser(){
    // debugger
    console.log(this.user);

    console.log('values controls form',this.formPostUser);
    if (this.formPostUser.valid) {
      
    let users: User = {
      Usuario_Nickname: this.formPostUser.get("Usuario_Nickname")?.value,
      Usuario_Nombre: this.formPostUser.get("Usuario_Nombre")?.value,
      Usuario_Apellido: this.formPostUser.get("Usuario_Apellido")?.value,
      Usuario_Email: this.formPostUser.get("Usuario_Email")?.value,
      Usuario_Password: this.formPostUser.get("Usuario_Password")?.value,
      Usuario_Rol_Numero:  this.formPostUser.get("Usuario_Rol_Numero")?.value
    }
    console.log(this.user);

 this.XpsService.postXPSUser(users)
                .subscribe( rsp => {
                  // this.user = rsp; 
                
                  this.router.navigateByUrl('/Register-casos')
                  console.log('user added!');
                  console.log('values controls form',this.formPostUser.controls.value);
                  
                } )
    }

  }

  readUser(){
    this.XpsService.getXPSUser().subscribe(res=>{
      const {Usuario_Email}= res;
      console.log(Usuario_Email);
      console.log(typeof res);
      
    })
  }
  // login(){

  //   this.AuthService.login()
  //   .subscribe(resp=>{
      
  //     console.log(resp);
      
  //     if(resp.Usuario_Rol_Numero == 2){
     
  //       this.router.navigateByUrl('./List');
  //     }
  //     else{
  //       this.router.navigateByUrl('./Register-casos');

  //   }
  //   })
  //    }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}
