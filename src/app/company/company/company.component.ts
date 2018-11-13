import { Component, OnInit } from '@angular/core';
import { CompanyService, Message } from '../company.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public company: CompanyService,public af: AngularFireDatabase) {
      
 }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.company.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.company.converse(this.formValue);
    this.formValue = '';
  }

}