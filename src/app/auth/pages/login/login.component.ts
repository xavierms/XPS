import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private AuthService: AuthService) { }
              // focus1;
              // focus2;
              // focus3;
              // focus4;
              // focus5;



  ngOnInit(): void {
  }

  login(){

    this.AuthService.login()
    .subscribe(resp=>{
      console.log(resp);
      
      if(resp.id){
     
        this.router.navigate(['./heroes']);
      }
    })
     }

}
