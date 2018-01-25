import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorHandler } from 'app/app.error-handler';

@Injectable()
export class RestaurantsServices{
      constructor(private http:Http) {}
      restaurants():Observable<Restaurant[]>{
          return this.http.get(MEAT_API + '/restaurants')
          .map(r => r.json())
          .catch(ErrorHandler.handleError)
      }
}
