import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  section: string = 'Login';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(AppComponent.title + this.section);
  }

}
