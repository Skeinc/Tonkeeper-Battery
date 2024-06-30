import { NgModule } from "@angular/core";
import { FAQComponent } from "./faq.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        FAQComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        FAQComponent,
    ],
})
export class FAQModule {}