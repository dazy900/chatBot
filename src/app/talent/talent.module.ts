/// company.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TalentService } from './talent.service';
import { TalentComponent } from './talent/talent.component';
import { AngularFireDatabase } from 'angularfire2/database';
//import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';


export const firebase = {
  apiKey: "AIzaSyBDasnPtq2MP5EIZ5w6NJiGIcECcyimL8w",
  authDomain: "company-e9012.firebaseapp.com",
  databaseURL: "https://company-e9012.firebaseio.com",
  projectId: "company-e9012",
  storageBucket: "company-e9012.appspot.com",
  messagingSenderId: "849867479546",
  angularBot: 'c1fa6478a4dd491da31f215f064c12f3'
};




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
   // AngularFireDatabase 
  
  ],
  declarations: [
    TalentComponent,
    AboutComponent,
    WorkComponent,
  ],
  exports: [ TalentComponent ], // <-- export here
  providers: [TalentService]
})
export class TalentModule { }

