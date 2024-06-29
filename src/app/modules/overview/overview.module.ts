import { NgModule } from "@angular/core";
import { OverviewComponent } from "./overview.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderModule } from "./components/header/header.module";
import { HeroSectionModule } from "./components/hero-section/hero-section.module";

@NgModule({
    declarations: [
        OverviewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        // Components
        HeaderModule,
        HeroSectionModule,
    ],
    exports: [
        OverviewComponent,
    ],
})
export class OverviewModule {}