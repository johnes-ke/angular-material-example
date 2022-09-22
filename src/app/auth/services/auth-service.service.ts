import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';

import { LoginInterface } from '../interfaces/login-interface';
import { RegisterInterface } from '../interfaces/register-interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isAuthenticated: boolean = false;
  isLoading:       boolean = false;
  passwordMatched: boolean = true;

  constructor(private router: Router) {}

  login(form: LoginInterface){
    this.isLoading = true;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        //alert("Login Success...!!")
        this.isAuthenticated = true;
        this.router.navigate(['/dashboard']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Credentials does not match our database");
        this.isAuthenticated = false;
      }).finally(() => this.isLoading = false );
  }

  register(form: RegisterInterface){
    this.isLoading = true;

    if(form.password != form.confirm_password){
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(userCredential);
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        // ..
      }).finally(() => this.isLoading = false);
  }


}

