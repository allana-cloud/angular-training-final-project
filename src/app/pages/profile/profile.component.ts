import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { GlobalService } from '../../services/global.service';
import { UserProfile } from '../../models/profile.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      alias: new FormControl('', [Validators.required]),
      jobTitle: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNumber: new FormControl('', [Validators.required]),
    });

    // console.log('data',this.globalService.getUserProfileData());
    this.fillForm(this.globalService.getUserProfileData());    
  }

  onSubmit(): void {        
    if (this.profileForm.valid) {            
      const formValues = this.profileForm.value;
      const payload = {
        meta: {
          first_name: formValues.firstName,
          last_name: formValues.lastName,
          job_title: formValues.jobTitle,
          mobile_number: formValues.mobileNumber,
          timezone: 'Asia/Manila'
        },
        current_password: '',
        email: formValues.email,
        alias: formValues.alias
      };      

      /**
       * send update id there are changes in the form else do not send
       * update request
       */
      // console.log('onSubmit-is_there_any_changes_to_the_form:', this.profileForm.dirty);
      if (this.profileForm.dirty) {
        this.globalService.httpUpdateProfile(payload);
      }      

      Swal.fire('Success', 'Profile was updated!', 'success');
    } else {
      Swal.fire('Form field error', 'Please fill in required fields', 'error');
    }    
  }
  
  fillForm(userProfile: UserProfile): void {    
    this.profileForm.patchValue(userProfile);
  }

}
