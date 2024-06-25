import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ApplicationModule } from "@modules/application/application.module";
import { OverviewModule } from "@modules/overview/overview.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        // Modules
        AppRoutingModule,
        ApplicationModule,
        OverviewModule,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}