import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private exploreBaseUrl = 'https://api.foursquare.com/v2/venues/explore';  // URL to web API
  private trendingBaseUrl = 'https://api.foursquare.com/v2/venues/trending';
  private apiVersion = '20180323';

  private clientId = '';
  private clientSecret = '';

  private currentLocationCoordinates = '51.5132347,-0.0781538';
  private searchRadius = '500'; // metres
  private resultLimit = '10';

  constructor(private http: HttpClient) { }

  private searchVenues(query: string): Observable<any> {
    const params = new HttpParams()
    .set('client_id', this.clientId)
    .set('client_secret', this.clientSecret)
    .set('v', this.apiVersion)
    .set('ll', this.currentLocationCoordinates)
    .set('query', query)
    .set('limit', this.resultLimit);
    return this.http.get<any>(this.exploreBaseUrl, {params});
  }

  getRestaurants(query: string): Restaurant[] {
    let restaurants: Restaurant[] = [];
    this.searchVenues(query)
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

  private getTrendingVenues(): Observable<any> {
    const params = new HttpParams()
    .set('client_id', this.clientId)
    .set('client_secret', this.clientSecret)
    .set('v', this.apiVersion)
    .set('ll', this.currentLocationCoordinates)
    .set('radius', this.searchRadius)
    .set('limit', this.resultLimit);
    let response = this.http.get<any>(this.trendingBaseUrl, {params});
    return response;
  }

  getRecommendations(): Restaurant[] {
    let restaurants: Restaurant[] = [];
    this.getTrendingVenues()
      .subscribe(payload => {
        let venues = payload["response"].venues;
        if(venues.length === 0) {
          return;
        }
        let responseArray = payload["response"].groups[0].items;
        responseArray.forEach(element => {
          let venue = element.venue;
          let address = venue.location['address'] + ', ' + venue.location['city'] + ', ' + venue.location['postalCode'];
          let category = venue.categories[0]['name'];

          restaurants.push({
            id: venue.id,
            name: venue.name,
            rating: '-',
            category: category,
            address: address,
            url: ''
          });
        });
      })
      return restaurants;
  }
}
