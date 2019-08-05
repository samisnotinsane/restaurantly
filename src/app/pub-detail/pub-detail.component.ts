import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-pub-detail',
  templateUrl: './pub-detail.component.html',
  styleUrls: ['./pub-detail.component.css']
})
export class PubDetailComponent implements OnInit {

  @Input() pub: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
