import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/Forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm:FormGroup;
  emailPattern:string="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
  passwordPattern:string="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  


  constructor() {}
  get getFirstName()
  {
    return this.loginForm.get("firstNameValidator");
  }
  get getEmail()
  {
    return this.loginForm.get("emailValidator")
  }
  get getPassword()
  {
    return this.loginForm.get("passwordValidator");
  }
    ngOnInit() {
      this.loginForm=new FormGroup({
        firstNameValidator:new FormControl('',[Validators.required,Validators.minLength(4)]),
        emailValidator:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
        passwordValidator:new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)])

      })
    
}
}
  