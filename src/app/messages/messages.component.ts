import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public messages = [];
  private message = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.';
  private author = 'John Smith';
  private amount = _.random(1, 10);

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= this.amount; i++) {
      this.messages.push(
        {
          author: this.author,
          message: this.message
        }
      );
    }
  }
}
