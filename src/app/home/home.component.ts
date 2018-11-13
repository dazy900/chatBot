import { Component, OnInit } from '@angular/core';
import { HomeService, Message } from '../service/home.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public home: HomeService,public af: AngularFireDatabase) {
      
 }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.home.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.home.converse(this.formValue);
    this.formValue = '';
  }

}