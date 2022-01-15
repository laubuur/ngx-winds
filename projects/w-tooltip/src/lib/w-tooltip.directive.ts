import { Directive, ElementRef, HostListener, Input, ViewContainerRef, TemplateRef, Renderer2 } from '@angular/core';


@Directive({
    selector: '[w-tooltip]'
})

export class WTooltipDirective {

    @Input('w-tooltip') value!: string;
    @Input('w-position') position!: string;
    @Input('w-animation') animation: boolean = true;
    @Input('w-html') html: boolean = false;
    @Input('w-class') wClass: string | undefined = undefined;
    private tooltip: HTMLElement | undefined;
    private offset: number = 5;
    private background: string = 'slate-700';

    constructor(
        private el: ElementRef,
        private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
        if (!this.tooltip) this.show();
    }
    
    @HostListener('mouseleave') onMouseLeave() {
        if (this.tooltip) this.hide();
    }

    private hide(){
        this.renderer.removeClass(this.tooltip, 'opacity-100');
        this.renderer.addClass(this.tooltip, 'opacity-0');
        setTimeout(() => {
            this.renderer.removeChild(document.body, this.tooltip);
            this.tooltip = undefined;
        }, this.animation ? 300 : 0);
    }

    private show() {
        if (this.value?.length > 0) {
          
            this.tooltip = this.renderer.createElement('span');
            if (this.html) {
                this.renderer.setProperty(this.tooltip, 'innerHTML', this.value);
            }
            else {
                const text = this.renderer.createText(this.value);
                this.renderer.appendChild(this.tooltip, text);
            }
            
            this.renderer.appendChild(document.body, this.tooltip);
            this.addClasses('w-tooltip absolute text-white text-xs p-1 rounded bg-slate-700');
            this.addClasses('after:absolute after:content-[" "] after:border-4');
            if (this.wClass) this.renderer.addClass(this.tooltip,this.wClass);
            
            if (this.animation)  this.setAnimation();

            this.setPosition();
        }
    }

    private setAnimation() {
        this.addClasses('opacity-0 transition-opacity duration-300');
        setTimeout(() => {
            this.renderer.removeClass(this.tooltip, 'opacity-0');
            this.renderer.addClass(this.tooltip, 'opacity-100');
        });
    }

    private setPosition() {
        const parentRect = this.el.nativeElement.getBoundingClientRect();
        const elRect = this.tooltip?.getBoundingClientRect();

        let top, left;
       
        if ((this.position == 'left' || this.position == 'right') && this.tooltip && elRect) {
            top =  ((parentRect.height - elRect.height) / 2) + parentRect.top;
            this.addClasses('after:top-2/4 after:mt-[-4px]');
            if (this.position == 'left') {
                left = parentRect.left - elRect.width - this.offset;
                this.addClasses('w-tooltip-left after:left-full after:border-y-transparent after:border-r-transparent after:border-l-slate-700');
            }
            else {
                left = parentRect.left + parentRect.width + this.offset;
                this.addClasses('w-tooltip-right after:right-full after:border-y-transparent after:border-r-slate-700 after:border-l-transparent');
            }
        }
        else if ((this.position == 'bottom' || this.position == 'top') && this.tooltip && elRect) {
            left = ((parentRect.width - elRect.width) / 2 ) + parentRect.left;
            this.addClasses('after:left-2/4 after:ml-[-4px]');
            if (this.position == 'bottom') {
                this.addClasses('w-tooltip-bottom after:bottom-full after:border-t-transparent after:border-b-slate-700 after:border-x-transparent');
                
                top = parentRect.top + parentRect.height + this.offset;
            }
            else {
                this.addClasses('w-tooltip-right after:top-full after:border-t-slate-700 after:border-x-transparent after:border-b-transparent');
                top = parentRect.top - elRect.height - this.offset;
            }
        }

        this.renderer.setStyle(this.tooltip, 'top', top+'px');
        this.renderer.setStyle(this.tooltip, 'left', left+'px');
    }

    public addClasses(cl: string, target = this.tooltip): void {
        let classes = cl.split(' ');
        for (let c of classes) {
            if (c != '' && c!= ' ') this.renderer.addClass(this.tooltip, c);
        }
    }
}