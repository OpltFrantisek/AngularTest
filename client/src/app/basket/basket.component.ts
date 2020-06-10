import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../shared/models/basket';
import { BasketsService } from './baskets.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
 basket$: Observable<IBasket>;
  constructor(private basketService: BasketsService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }
  removeBasketItem(item: IBasketItem){
    this.basketService.removeItemFromBasket(item);
  }
  incrementItemQuantity(item: IBasketItem){
    this.basketService.incrementItemQuantity(item);
  }
  decrementBasketQuantity(item: IBasketItem){
    this.basketService.decrementItemQuantity(item);
  }
}
