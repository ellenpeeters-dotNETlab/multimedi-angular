import { Injectable } from '@angular/core';

import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Message[] = [
    {
      author: 'John Smith',
      message: 'Hallo'
    },
    {
      author: 'Gandalf',
      message: 'Hallo'
    },
    {
      author: 'Frodo',
      message: 'Hallo'
    },
    {
      author: 'Superman',
      message: 'Hallo'
    },
    {
      author: 'Wonderwoman',
      message: 'Hallo'
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }
}
