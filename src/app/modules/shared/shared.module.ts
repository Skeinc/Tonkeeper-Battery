import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SmoothScrollDirective } from "@shared/directives/smoth-scroll.directive";

@NgModule({
    declarations: [
        // Directives
        SmoothScrollDirective,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        // Directives
        SmoothScrollDirective,
    ]
})
export class SharedModule {}