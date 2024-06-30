import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectorRef, Component, HostListener } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    animations: [
        trigger('expandCollapse', [
            state('collapsed', style({
                height: '0',
                display: 'none',
                opacity: '0'
            })),
            state('expanded', style({
                height: '*',
                display: 'flex',
                opacity: '1'
            })),
            transition('collapsed => expanded', [
                animate('300ms ease-out')
            ]),
            transition('expanded => collapsed', [
                animate('300ms ease-in')
            ])
        ]),
    ],
})
export class HeaderComponent{
    constructor (
        private cdr: ChangeDetectorRef,
    ) {}

    public isOverlayVisible: boolean = false;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        if(event.target.innerWidth > 1068) {
            this.isOverlayVisible = false;

            this.cdr.detectChanges();
        };
    };

    public toggleOverlayVisible(): void {
        this.isOverlayVisible = !this.isOverlayVisible;
    };
}