import { NgModule } from '@angular/core';
import { WdsCalendarComponent } from './wds-calendar.component';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
    declarations: [
        WdsCalendarComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        WdsCalendarComponent
    ]
})
export class WdsCalendarModule { }
