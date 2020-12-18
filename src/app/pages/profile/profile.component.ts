import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { GlobalService } from '../../services/global.service';
import { UserProfile } from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm : FormGroup;

  constructor(
    private appComponent: AppComponent,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {    
    this.appComponent.setTitle('Profile');

    this.profileForm = new FormGroup({      
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      alias: new FormControl(''),
      jobTitle: new FormControl(''),
      email: new FormControl(''),
      mobileNumber: new FormControl(''),
    });

    // console.log('data',this.globalService.getUserProfileData());
    this.fillForm(this.globalService.getUserProfileData());    
  }

  onSubmit(): void {
    console.log('onsubmit');
  }

  fillForm(userProfile: UserProfile): void {    
    this.profileForm.patchValue(userProfile);
  }

}
