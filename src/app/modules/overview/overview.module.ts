import { NgModule } from "@angular/core";
import { OverviewComponent } from "./overview.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        OverviewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        OverviewComponent,
    ],
})
export class OverviewModule {}