import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WTooltipModule } from 'w-tooltip';
import { WdsCalendarModule } from 'wds-calendar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WTooltipModule,
    WdsCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
