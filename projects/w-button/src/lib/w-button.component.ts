import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'w-button',
  templateUrl: './w-button.component.html'
})
export class WButtonComponent implements OnInit {

    @Input() size: string = 'base';
    @Input() color: string = 'indigo';
    @Input() textColor: string = 'white';

    constructor() { }

    ngOnInit(): void {
        if (['zinc', 'zinc2'].includes(this.color)) {
            this.textColor = 'grey'
        }
    }

}
