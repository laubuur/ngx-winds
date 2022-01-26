import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WTooltipModule } from 'w-tooltip';
import { WdsCalendarModule } from 'wds-calendar';
import { WButtonModule } from 'w-button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WTooltipModule,
    WdsCalendarModule,
    WButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
