import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MessageService } from './services/message.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
