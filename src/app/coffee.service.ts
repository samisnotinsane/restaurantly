import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { COFFEES } from './mock-coffee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }

  getCoffees(): Observable<Restaurant[]> {
    return of(COFFEES);
  }
}
