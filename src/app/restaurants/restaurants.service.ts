import {Injectable} from '@angular/core/';
import {Http} from '@angular/http';
import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorHandler } from 'app/app.error-handler';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsServices{
      constructor(private http: Http) {}
      restaurants(): Observable<Restaurant[]>{
          return this.http.get(MEAT_API + '/restaurants')
          .map(r => r.json())
          .catch(ErrorHandler.handleError)
      }


      restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(MEAT_API + '/restaurants/' + id)
        .map(r => r.json())
        .catch(ErrorHandler.handleError)
      }


      reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(MEAT_API + '/restaurants/' + id + '/reviews')
        .map(r => r.json())
        .catch(ErrorHandler.handleError)
      }

      menusOfRestaurant(id: string): Observable<MenuItem>{
        return this.http.get(MEAT_API + '/restaurants/' + id + '/menu')
        .map(r => r.json())
        .catch(ErrorHandler.handleError)
      }

}
