import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffees: Restaurant[];
  selectedCoffee: Restaurant;

  constructor(private coffeeService: CoffeeService) { }

  getCoffees(): void {
    this.coffeeService.getCoffees()
      .subscribe(coffees => this.coffees = coffees);
  }

  ngOnInit() {
    this.getCoffees();
  }

}
