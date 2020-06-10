import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasketTotals } from '../../models/basket';
import { BasketsService } from 'src/app/basket/baskets.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
 basketsTotal$: Observable<IBasketTotals>;
  constructor(private basketService: BasketsService) { }

  ngOnInit(): void {
    this.basketsTotal$ = this.basketService.basketTotals$;
  }

}
