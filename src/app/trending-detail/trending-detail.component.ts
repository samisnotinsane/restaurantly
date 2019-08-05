import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-trending-detail',
  templateUrl: './trending-detail.component.html',
  styleUrls: ['./trending-detail.component.css']
})
export class TrendingDetailComponent implements OnInit {

  @Input() recommendation: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
