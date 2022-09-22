import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from '../../firebase.config';
import { initializeApp } from 'firebase/app';

import { AuthService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    initializeApp(firebaseConfig)
  }

  title = "angular-material-example"

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }
}
