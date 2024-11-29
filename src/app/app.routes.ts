import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricoComponent } from './historico/historico.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'historicos', component: HistoricoComponent },
     {path: '**', redirectTo: '', pathMatch: 'full'},
];
