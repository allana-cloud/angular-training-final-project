import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { UserProfile } from '../../models/profile.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  userProfile: UserProfile = {
    name: '',
    jobTitle: '',
    email: '',
    mobileNumber: ''
  };

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    // console.log('sidebar-OnInit');
    if (this.globalService.isAuthenticated()) {      
      this.userProfile = this.globalService.getUserProfileData();        
    }
    
    this.globalService.profileData.subscribe(
      (hasUpdate: boolean) => {
        if (hasUpdate) {
          // console.log('sidebar-event-profileData');
          this.userProfile = this.globalService.getUserProfileData();
        }
      }
    );

    this.globalService.isLogged.subscribe(
      (logged: boolean) => {   
        if (!logged) {
          // console.log('has logged out clear user data now');
          this.userProfile = {
            name: '',
            jobTitle: '',
            email: '',
            mobileNumber: ''
          }          
        }    
      }
    );
  }

}
