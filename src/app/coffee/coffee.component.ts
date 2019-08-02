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

  onSelect(coffee: Restaurant): void {
    this.selectedCoffee = coffee;
  }

  ngOnInit() {
    this.getCoffees();
  }

}
