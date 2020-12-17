import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneColumnComponent } from './layouts/one-column/one-column.component';
import { TwoColumnComponent } from './layouts/two-column/two-column.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { SidebarComponent } from './elements/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './elements/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OneColumnComponent,
    TwoColumnComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    TicketsComponent,
    AboutUsComponent,
    ProfileComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
