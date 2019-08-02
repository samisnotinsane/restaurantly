import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const params = new HttpParams()
    .set('client_id', 'ONTL5ZVUZJOSA0MGHGZD2NWIKXQFZNAJYGKGIK4VQ44GQAE0')
    .set('client_secret', 'LLNGLOEACXGQJBENQFD0YUBVILKLFVZWXMBCXLVHUTBQDJIC')
    .set('v', '20180323')
    .set('ll', '51.5132347,-0.0781538')
    .set('query', 'coffee')
    .set('limit', '10');

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private baseUrl = 'https://api.foursquare.com/v2/venues/explore';  // URL to web API

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl, {params});
  }

  getRestaurants(): Restaurant[] {
    let restaurants: Restaurant[] = [];
    this.getAll()
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
