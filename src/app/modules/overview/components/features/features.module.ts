import { NgModule } from "@angular/core";
import { FeaturesComponent } from "./features.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        FeaturesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        FeaturesComponent,
    ],
})
export class FeaturesModule {}