import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Login } from '../models/login.model';
import { UserProfile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private token: string;

  isLogged = new Subject();
  profileData = new Subject();
  // onHttpLogin = new Subject();
  // onHttpUpdateProfile = new Subject();

  constructor(private http: HttpClient) { 
    this.token = '';    
  }

  auth(form: Login): void {    
    const url = 'https://stage-api-ubertickets.cloudstaff.com/v1/auth/login';

    this.http.post(url, form).subscribe(
      (response: any) => {        
         if (response.status === 'success') {
          this.token = response.data.token;
          
          // set listeners data
          this.isLogged.next(true);
          localStorage.setItem('isLogged', 'yes');
         }  
      },
      (error) => {
        // console.log('httpLogin error response :', error);
        this.isLogged.next(false);
        localStorage.setItem('isLogged', 'no');
      }
    );
  }

  isAuthenticated(): boolean {
    const logged = localStorage.getItem('isLogged');    
    return (logged === 'yes') ? true : false;
  }

  logout(): void {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('profileData');
    this.isLogged.next(false);
  }

  getUserProfileData(): UserProfile {
    let userProfile: UserProfile = {
      name: '',
      jobTitle: '',
      email: '',
      mobileNumber: '',
      firstName: '',
      lastName: '',
      photoUrl: 'https://via.placeholder.com/150',
      alias: '',
    };

    const fromStorageProfileData = localStorage.getItem('profileData');    
    if (fromStorageProfileData) {
      const profileData = JSON.parse(fromStorageProfileData);            
      userProfile.name = profileData.name;
      userProfile.jobTitle = profileData.meta.job_title;
      userProfile.email = profileData.email;
      userProfile.mobileNumber = profileData.meta.mobile_number;
      userProfile.lastName = profileData.meta.last_name;
      userProfile.firstName = profileData.meta.first_name;
      userProfile.photoUrl = profileData.meta.photo_url;
      userProfile.alias = profileData.alias;
    } 
    
    return userProfile;
  }

  httpGetProfile(): void {
    const url = 'https://stage-api-ubertickets.cloudstaff.com/v1/users/my';
    
    if (!localStorage.getItem('profileData')) {
      this.http.get(url, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
      }).subscribe(
        (response: any) => {        
          if (response.status === 'success') {
            // console.log(response.data);
            // set profileData subject
            localStorage.setItem('profileData', JSON.stringify(response.data));
            this.profileData.next(true);
          }        
        },
        (error) => {
          console.log('httpGetProfile error response:', error);
        }
      );
    }
  }

  // httpUpdateProfile(data: any): void {
  //   const url = 'https://stage-api-ubertickets.cloudstaff.com/v1/users/my';
  //   const token = this.getToken();

  //   this.http.put(url, data, {
  //     headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
  //   }).subscribe(
  //     (response: any) => {
  //       // console.log('update from profile service', response);
  //       if (response.status === 'success') {
  //         this.onHttpUpdateProfile.next(response.data);
  //       }
  //     },
  //     (error) => {
  //       console.log('error response in httpUpdateProfile', error);
  //     }
  //   );
  // }

  // setToken(token: string): void {
  //   localStorage.setItem('token', token);
  // }

  // getToken(): string {
  //   const token = localStorage.getItem('token');
  //   return token?.toString() || '';
  // }

  // checkLogStatus(): void {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     this.isLogged.next(true);
  //   } else {
  //     this.isLogged.next(false);
  //   }
  // }

  // deleteToken(): void {
  //   localStorage.removeItem('token');
  //   this.isLogged.next(false);
  // }
}
