import {provideRouter, RouterConfig} from '@angular/router';
import {HeroesComponent} from '../heroes.component';
import {DashboardComponent} from '../components/dashboard.component';
import {HeroDetailComponent} from "../components/hero-detail.component";

const routes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
