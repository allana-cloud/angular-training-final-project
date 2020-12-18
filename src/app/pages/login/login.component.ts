import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Login } from '../../models/login.model';
import { GlobalService } from '../../services/global.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isLogged: boolean;

  formLogin: Login = {
    username: '',
    password: ''
  }

  constructor(
    private appComponent: AppComponent,
    private globalService: GlobalService,
    private router: Router
  ) { 
    this.isLogged = false;
  }

  ngOnInit(): void {    
    this.appComponent.setTitle('Login');
  }

  onLogin(): void {
    // console.log('onLogin-click');    
    this.globalService.auth(this.formLogin);

    this.globalService.isLogged.subscribe(
      (logged: boolean) => {        
        if (logged) {
          // redirect to Home with user details
          // console.log('redirect to Home with user details');
          this.router.navigate(['']);
        } 
        // else {
          // invalid login          
          // Swal.fire('An Error Occured', 'Unauthorized Access', 'error')
        // }
      }
    );
  }
}
