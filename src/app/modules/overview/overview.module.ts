import { NgModule } from "@angular/core";
import { OverviewComponent } from "./overview.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderModule } from "./components/header/header.module";
import { HeroSectionModule } from "./components/hero-section/hero-section.module";
import { AboutModule } from "./components/about/about.module";
import { BenefitsModule } from "./components/benefits/benefits.module";
import { FeaturesModule } from "./components/features/features.module";
import { FAQModule } from "./components/faq/faq.module";
import { FooterModule } from "./components/footer/footer.module";

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
        AboutModule,
        BenefitsModule,
        FeaturesModule,
        FAQModule,
        FooterModule,
    ],
    exports: [
        OverviewComponent,
    ],
})
export class OverviewModule {}