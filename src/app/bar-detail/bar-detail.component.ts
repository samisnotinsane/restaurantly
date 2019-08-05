import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.css']
})
export class BarDetailComponent implements OnInit {

  @Input() bar: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
