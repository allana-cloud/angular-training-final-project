import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoColumnComponent } from './layouts/two-column/two-column.component';
import { HomeComponent } from './pages/home/home.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OneColumnComponent } from './layouts/one-column/one-column.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    component: TwoColumnComponent , 
    children: [
      { path: '', component: HomeComponent },
      { path: 'tickets', component: TicketsComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  {
    path: 'about-us',
    component: OneColumnComponent,
    children: [
      { path: '', component: AboutUsComponent }
    ]
  },
  {
    path: 'login',
    component: OneColumnComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
