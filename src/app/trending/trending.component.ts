import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  recommendations: Restaurant[];
  selectedRecommendation: Restaurant;

  constructor(private restaurantService: RestaurantService) { }

  onSelect(recommendation: Restaurant): void {
    this.selectedRecommendation = recommendation;
  }

  ngOnInit() {
    this.recommendations = this.restaurantService.getRecommendations();
  }

}
