import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
    @Input() appSmoothScroll!: string;

    @HostListener('click', ['$event'])
    onClick(event: Event): void {
        event.preventDefault();

        const element = document.querySelector(this.appSmoothScroll);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        };
    };
}