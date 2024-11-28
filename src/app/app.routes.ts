import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'dashboard', component: DashboardComponent }
];
