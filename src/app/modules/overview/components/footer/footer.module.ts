import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        FooterComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        FooterComponent,
    ],
})
export class FooterModule {}