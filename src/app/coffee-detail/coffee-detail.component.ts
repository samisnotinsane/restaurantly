import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

  @Input() coffee: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
