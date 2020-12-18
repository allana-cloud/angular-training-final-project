import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  isLogged: boolean;

  constructor(private globalService: GlobalService) { 
    this.isLogged = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // console.log('header-onInit:');
    this.isLogged = this.globalService.isAuthenticated();
    
    this.globalService.isLogged.subscribe(
      (logged: boolean) => {
        this.isLogged = logged;
      }
    );
  }

  onLogout(): void {    
    this.globalService.logout();
  }
}
