import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { route } from './app.route';
import { AdminActivateGuard } from './admin.activate-guard';
import { GuardService } from './guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [AdminActivateGuard, GuardService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
