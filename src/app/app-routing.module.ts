import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent }      from './issues/issues.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { IsDetailComponent }  from './is-detail/is-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: IsDetailComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}