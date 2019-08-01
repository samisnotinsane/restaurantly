import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { PubService } from '../pub.service';

@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.css']
})
export class PubsComponent implements OnInit {

  pubs: Restaurant[];
  selectedPub: Restaurant;

  constructor(private pubService: PubService) { }

  getPubs(): void {
    this.pubService.getPubs()
      .subscribe(pubs => this.pubs = pubs);
  }

  ngOnInit() {
    this.getPubs();
  }

}
