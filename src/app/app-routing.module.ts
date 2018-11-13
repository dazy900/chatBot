import { Routes, RouterModule } from '@angular/router';
import { TalentComponent } from './talent/talent/talent.component';
import { CompanyComponent } from './company/company/company.component';
import { TalentModule } from './talent/talent.module';
import { HomeComponent } from './home/home.component';
import { CompanyModule } from './company/company.module';
import { NgModule } from '@angular/core';
import { HiringComponent } from './company/hiring/hiring.component'
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './talent/about/about.component';
import { WorkComponent } from './talent/work/work.component';
const routes: Routes = [
    { path: 'home', component:  HomeComponent },
     { path: 'talent', component: TalentComponent },
     { path: 'company', component: CompanyComponent },
     { path: 'hiring', component: HiringComponent },
     { path: 'contact', component: ContactComponent},
     { path: 'about', component: AboutComponent},
     { path: 'work', component: WorkComponent},
    //  {
    //     path: "account",
    //     component: AccountComponent,
        
    //   },
{ path:'talent',redirectTo:'company'},
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' },
   
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }