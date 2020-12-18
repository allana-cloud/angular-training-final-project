import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLogged: boolean;

  currentDate = Date.now();

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    // console.log('header-onInit:');
    this.isLogged = this.globalService.isAuthenticated();

    this.globalService.isLogged.subscribe(
      (logged: boolean) => {
        this.isLogged = logged;
      }
    );
  }

}
