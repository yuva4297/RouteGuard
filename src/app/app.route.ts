import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminActivateGuard } from "./admin.activate-guard";

export const route: Routes = [
{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminActivateGuard]
},
{
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard'}
},
{
    path: '',
    component: UserComponent 
}
]

