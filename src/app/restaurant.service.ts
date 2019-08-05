import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = 'https://api.foursquare.com/v2/venues/explore';  // URL to web API

  constructor(private http: HttpClient) { }

  getQueryApi(query: string): Observable<any> {
    const params = new HttpParams()
    .set('client_id', '')
    .set('client_secret', '')
    .set('v', '20180323')
    .set('ll', '51.5132347,-0.0781538')
    .set('query', query)
    .set('limit', '10');
    return this.http.get<any>(this.baseUrl, {params});
  }

  getRestaurants(query: string): Restaurant[] {
    let restaurants: Restaurant[] = [];
    this.getQueryApi(query)
      .subscribe(payload => {
        let recArr = payload["response"].groups[0].items;
        recArr.forEach(element => {
          let venue = element.venue;
          let address = venue.location['address'] + ', ' + venue.location['city'] + ', ' + venue.location['postalCode'];
          let category = venue.categories[0]['name'];
          restaurants.push({
              id: venue.id,
              name: venue.name,
              rating: '-',
              category: category,
              address: address,
              url: '',
            });
        });
      });
      return restaurants;
  }
}
