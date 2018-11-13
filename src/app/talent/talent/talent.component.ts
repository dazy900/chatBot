import { Component, OnInit } from '@angular/core';
import { TalentService, Message } from '../talent.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public talent: TalentService,public af: AngularFireDatabase) {
      
 }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.talent.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.talent.converse(this.formValue);
    this.formValue = '';
  }

}