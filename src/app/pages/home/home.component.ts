import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  section: string  = 'Home';
  
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(AppComponent.title + this.section);
  }

}
