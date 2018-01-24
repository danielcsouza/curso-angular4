import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsServices } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[]
  constructor(private restaurantServices: RestaurantsServices) {  }
  ngOnInit() {
    this.restaurantServices.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants);
    
    //console.log(this.restaurantServices.restaurants());
  }

}
