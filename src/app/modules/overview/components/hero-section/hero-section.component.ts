import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements OnInit{
    constructor (
        private cdr: ChangeDetectorRef,
    ) {}

    @ViewChild('title') title?: ElementRef;
    @ViewChild('subtitle') subtitle?: ElementRef;
    @ViewChild('actionGetStarted') action?: ElementRef;
    @ViewChild('links') links?: ElementRef;

    public titleAnimationLoading: boolean = true;
    public subtitleAnimationLoading: boolean = true;
    public actionAnimationLoading: boolean = true;
    public linksAnimationLoading: boolean = true;

    ngOnInit(): void {
        this.activateAnimation();
    };

    private activateAnimation(): void {
        setTimeout(() => {
            if(this.title) {
                this.title.nativeElement.style.animation = "slideRight 0.75s ease-in-out";
                this.titleAnimationLoading = false;

                this.cdr.markForCheck();
            };
        }, 0);

        setTimeout(() => {
            if(this.subtitle) {
                this.subtitle.nativeElement.style.animation = "slideRight 0.75s ease-in-out";
                this.subtitleAnimationLoading = false;

                this.cdr.markForCheck();
            };
        }, 250);

        setTimeout(() => {
            if(this.action) {
                this.action.nativeElement.style.animation = "slideRight 0.75s ease-in-out";
                this.actionAnimationLoading = false;

                this.cdr.markForCheck();
            };
        }, 500)

        setTimeout(() => {
            if(this.links) {
                this.links.nativeElement.style.animation = "slideRight 0.75s ease-in-out";
                this.linksAnimationLoading = false;

                this.cdr.markForCheck();
            };
        }, 750);
    }
}