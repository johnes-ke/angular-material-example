import { Component, OnInit } from '@angular/core';
import { RegisterInterface } from '../../../auth/interfaces/register-interface';
import { AuthService } from '../../../auth/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  form: RegisterInterface = {
    email: '',
    password: '',
    confirm_password: ''
  }

  onSubmit(){
    this.authService.register(this.form);
  }

  isLoading(){
    return this.authService.isLoading;
  }

}
