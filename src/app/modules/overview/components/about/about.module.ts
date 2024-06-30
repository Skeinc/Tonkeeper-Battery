import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChartModule } from 'primeng/chart';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        // PrimeNG
        ChartModule,
    ],
    exports: [
        AboutComponent,
    ],
})
export class AboutModule {}