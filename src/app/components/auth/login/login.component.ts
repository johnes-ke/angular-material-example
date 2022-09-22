import { Component, OnInit } from '@angular/core';

import { LoginInterface } from '../../../auth/interfaces/login-interface';
import { AuthService } from '../../../auth/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: LoginInterface = {
    email: '',
    password: ''
  }

  isLoginMode = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(){
    //console.log(form.value);
    //form.reset();
    this.authService.login(this.form);
  }

  isLoading(){
    return this.authService.isLoading;
  }

  // login(){
  //   this.isLoading = true;
  //   setTimeout(() => {
  //     this.router.navigate(['/']);
  //   }, 2000);
  // }

}
