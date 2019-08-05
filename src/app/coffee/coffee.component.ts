import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  counter: number = 0;
  coffeeShops: Restaurant[];
  selectedCoffeeShop: Restaurant;

  constructor(private restaurantService: RestaurantService) { }

  onSelect(coffee: Restaurant): void {
    this.selectedCoffeeShop = coffee;
  }

  ngOnInit() {
    this.coffeeShops = this.restaurantService.getRestaurants('coffee');
  }

}
