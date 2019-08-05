import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  counter: number = 0;
  bars: Restaurant[];
  selectedBar: Restaurant;

  constructor(private restaurantService: RestaurantService) { }

  onSelect(bar: Restaurant): void {
    this.selectedBar = bar;
  }

  ngOnInit() {
    this.bars = this.restaurantService.getRestaurants('drinks bar');
  }

}
