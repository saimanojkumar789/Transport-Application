import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransportlistComponent } from './components/transportlist/transportlist.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { ErrorComponent } from './components/error/error.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { FavComponent } from './components/fav/fav.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'favourite', component: FavComponent , pathMatch: 'full', canActivate: [AuthGuardGuard]},
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'allroutes', component: TransportlistComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },
  { path: 'updatepass', component: ChangePassComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },
  { path: '',component: HomeComponent,pathMatch:'full' },
  { path: '**', component: ErrorComponent, pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
