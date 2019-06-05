import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsServices } from '../restaurants/restaurants.service';
import { OrderService } from 'app/order/order-items/order.service';


@NgModule({
    declarations:[InputComponent, RadioComponent, RatingComponent],
    imports:[FormsModule, CommonModule, ReactiveFormsModule],
    exports:[InputComponent, RadioComponent, RatingComponent,
             FormsModule, CommonModule, ReactiveFormsModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShopingCartService,  RestaurantsServices, OrderService]
        };
    }
 }