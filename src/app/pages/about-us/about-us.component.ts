import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  section: string  = 'About Us'

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(AppComponent.title + this.section);
  }

}
