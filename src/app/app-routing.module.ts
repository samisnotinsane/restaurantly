import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { TrendingComponent } from './trending/trending.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { PubsComponent } from './pubs/pubs.component';
import { BarsComponent } from './bars/bars.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'trending',
    component: TrendingComponent,
  },
  {
    path: 'coffee',
    component: CoffeeComponent,
  },
  {
    path: 'pubs',
    component: PubsComponent,
  },
  {
    path: 'bars',
    component: BarsComponent,
  },
  {
    path: 'restaurants',
    component: RestaurantComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
