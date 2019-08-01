import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { PUBS } from './mock-pub';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor() { }

  getPubs(): Observable<Restaurant[]> {
    return of(PUBS);
  }
}
