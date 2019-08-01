import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  bars: Restaurant[];
  selectedBar: Restaurant;

  constructor(private barService: BarService) { }

  getBars(): void {
    this.barService.getBars()
      .subscribe(bars => this.bars = bars);
  }

  ngOnInit() {
    this.getBars();
  }

}
