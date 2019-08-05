import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.css']
})
export class PubsComponent implements OnInit {

  counter: number = 0;
  pubs: Restaurant[];
  selectedPub: Restaurant;

  constructor(private restaurantService: RestaurantService) { }

  onSelect(pub: Restaurant): void {
    this.selectedPub = pub;
  }
  
  ngOnInit() {
    this.pubs = this.restaurantService.getRestaurants('pubs');
  }

}
