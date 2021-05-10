import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './services/message.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    MessagesComponent,
    HomeComponent,
    BlogComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
