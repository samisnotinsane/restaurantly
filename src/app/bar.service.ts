import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { BARS } from './mock-bar';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor() { }

  getBars(): Observable<Restaurant[]> {
    return of(BARS);
  }
}
