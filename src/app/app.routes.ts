import { Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
         //   { path: 'login', component: LoginComponent}
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
         //   { path: 'login', component: LoginComponent}
        ]
    },
];
