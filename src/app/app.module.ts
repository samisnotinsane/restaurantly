import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ExploreComponent } from './explore/explore.component';
import { TrendingComponent } from './trending/trending.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { PubsComponent } from './pubs/pubs.component';
import { BarsComponent } from './bars/bars.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    ExploreComponent,
    TrendingComponent,
    CoffeeComponent,
    PubsComponent,
    BarsComponent,
    CoffeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
