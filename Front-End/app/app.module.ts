import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HeaderComponent} from './Header/header.component'

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
