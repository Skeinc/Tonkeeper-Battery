import { NgModule } from "@angular/core";
import { BenefitsComponent } from "./benefits.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        BenefitsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        BenefitsComponent,
    ],
})
export class BenefitsModule {}