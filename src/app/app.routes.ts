import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
        { path: '', redirectTo: 'menu', pathMatch: 'full' },
        { path: 'menu', component: MenuComponent },
        { path: 'reviews', component: ReviewsComponent }
    ] },
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'order', loadChildren: './order/order.module#OrderModule'},
    {path: 'order-summary', component: OrderSummaryComponent}

// tslint:disable-next-line:eofline
];