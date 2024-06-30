import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "@shared/components/material-ui/button/button.module";
import { SharedModule } from "@modules/shared/shared.module";
@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        // Components
        ButtonModule,
        // Modules
        SharedModule,
    ],
    exports: [
        HeaderComponent,
    ],
})
export class HeaderModule {}