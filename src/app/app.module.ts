import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WTooltipModule } from 'w-tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
