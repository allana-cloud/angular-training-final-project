import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  section: string = 'Tickets';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(AppComponent.title + this.section);
  }

}
