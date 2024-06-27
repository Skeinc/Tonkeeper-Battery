import { NgModule } from "@angular/core";
import { OverviewComponent } from "./overview.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderModule } from "./components/header/header.module";

@NgModule({
    declarations: [
        OverviewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        // Components
        HeaderModule,
    ],
    exports: [
        OverviewComponent,
    ],
})
export class OverviewModule {}