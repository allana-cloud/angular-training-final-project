import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  section: string = 'Profile';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(AppComponent.title + this.section);
  }

}
