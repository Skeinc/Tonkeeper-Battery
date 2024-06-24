import { Routes } from "@angular/router";
import { ApplicationComponent } from "@modules/application/application.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: ApplicationComponent,
    },
    {
        path: '**',
        redirectTo: '/',
    },
];