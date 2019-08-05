import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  counter: number = 0;
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant;

  constructor(private restaurantService: RestaurantService) { }

  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
  }

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurants('restaurant');
  }

}
