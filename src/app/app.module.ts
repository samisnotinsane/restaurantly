import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { TrendingComponent } from './trending/trending.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { PubsComponent } from './pubs/pubs.component';
import { BarsComponent } from './bars/bars.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { TrendingDetailComponent } from './trending-detail/trending-detail.component';
import { PubDetailComponent } from './pub-detail/pub-detail.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    TrendingComponent,
    CoffeeComponent,
    PubsComponent,
    BarsComponent,
    CoffeeDetailComponent,
    TrendingDetailComponent,
    PubDetailComponent,
    RestaurantDetailComponent,
    BarDetailComponent,
    HeaderComponent,
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
