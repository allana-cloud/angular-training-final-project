import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {    
    this.appComponent.setTitle('Tickets');
  }

}
