import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//<--------------------service--------------------->
 import { HomeService } from './service/home.service';
//import { CompanyService } from './company.service';

//<--------------------company--------------------->
import { CompanyModule } from './company/company.module';
//import { CompanyComponent } from './company/company/company.component';

import { ChatModule } from './chat/chat.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
 import { TalentModule } from './talent/talent.module';
import { TalentComponent } from './talent/talent/talent.component';
import { HttpModule } from '@angular/http';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    //TalentComponent,
     //TalentComponent,
    // CompanyComponent
   
  ],
  imports: [
    BrowserModule,
    ChatModule,
    CompanyModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
     TalentModule,
    HttpModule,
    CommonModule,
    FormsModule,
    
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
