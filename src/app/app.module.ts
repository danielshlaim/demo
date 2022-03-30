import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CodyrightComponent } from './codyright/codyright.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { EventsComponent } from './events/events.component';
import { TempratureComponent } from './temprature/temprature.component';
import { CounterComponent } from './counter/counter.component';
import { BindComponent } from './bind/bind.component';
import { Ngif2Component } from './ngif2/ngif2.component';
import { DogOrCatComponent } from './dog-or-cat/dog-or-cat.component';
import { FormsModule } from '@angular/forms';
import { FormTempDrivenComponent } from './form-temp-driven/form-temp-driven.component';









@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserDetailsComponent,
    CodyrightComponent,
    SimpleButtonComponent,
    EventsComponent,
    TempratureComponent,
    CounterComponent,
    BindComponent,
    Ngif2Component,
    DogOrCatComponent,
    FormTempDrivenComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UserAuthModule,
    FormsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
