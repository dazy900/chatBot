import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent  {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
