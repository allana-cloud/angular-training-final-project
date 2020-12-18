import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private appComponent: AppComponent,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.appComponent.setTitle('Home');

    this.globalService.isLogged.subscribe(
      (logged: boolean) => {
        // console.log('home-event-isLogged:');
        if (logged) {
          this.globalService.httpGetProfile();
        }        
      }
    );
  }

}
