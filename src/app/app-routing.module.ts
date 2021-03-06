import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventSubmissionComponent } from './event-submission/event-submission.component';
import { CreateSiteComponent } from './create-site/create-site.component';
import { AuthGuard } from './services/auth.guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'addEvent', component: EventSubmissionComponent, canActivate: [ AuthGuard ] },
  { path: 'addSite', component: CreateSiteComponent, canActivate: [ AuthGuard ] }
  /* { path: 'event/:id', component: EventDetailsComponent },
  { path: 'userdashboard', component: UserDashboardComponent, canActivate: [AuthenticationGuard] }, */
];

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) */
/* export class AppRoutingModule { } */

export const AppRoutingModule = RouterModule.forRoot(routes, {useHash: true}); // implements /#/
