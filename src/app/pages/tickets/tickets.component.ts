import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  
  tickets: any;
  totalRecords: number;

  constructor(
    private appComponent: AppComponent,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.appComponent.setTitle('Tickets');
    this.globalService.getMyTickets();

    this.globalService.ticketsData.subscribe(
      (data) => {        
        this.tickets = data;
        this.totalRecords = this.tickets.length;
      }
    );
  }

}
