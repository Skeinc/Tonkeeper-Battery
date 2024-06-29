import { NgModule } from "@angular/core";
import { HeroSectionComponent } from "./hero-section.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "@shared/components/material-ui/button/button.module";

@NgModule({
    declarations: [
        HeroSectionComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
    ],
    exports: [
        HeroSectionComponent,
    ],
})
export class HeroSectionModule {}