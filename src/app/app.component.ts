import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static readonly title = 'Angular Training Final Project - ';

  appTitle = 'Angular Training Final Project - ';

  constructor(private titleService: Title) { }

  public setTitle(page: string) {
    this.titleService.setTitle(this.appTitle + page);
  }
}
