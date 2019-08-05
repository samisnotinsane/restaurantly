import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ExploreComponent } from './explore/explore.component';
import { TrendingComponent } from './trending/trending.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { PubsComponent } from './pubs/pubs.component';
import { BarsComponent } from './bars/bars.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { PubDetailComponent } from './pub-detail/pub-detail.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    ExploreComponent,
    TrendingComponent,
    CoffeeComponent,
    PubsComponent,
    BarsComponent,
    CoffeeDetailComponent,
    PubDetailComponent,
    RestaurantDetailComponent,
    BarDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
