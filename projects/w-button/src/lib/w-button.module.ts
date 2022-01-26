import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WButtonComponent } from './w-button.component';



@NgModule({
  declarations: [
    WButtonComponent
  ],
  imports: [
    CommonModule      
  ],
  exports: [
    WButtonComponent
  ]
})
export class WButtonModule { }
