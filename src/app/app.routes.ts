import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent},
    {path: 'restaurants', component: RestaurantsComponent}
// tslint:disable-next-line:eofline
];
