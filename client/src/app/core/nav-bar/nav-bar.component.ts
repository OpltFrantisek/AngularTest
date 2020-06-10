import { Component, OnInit } from '@angular/core';
import { BasketsService } from 'src/app/basket/baskets.service';
import { Observable } from 'rxjs';
import { IBasket } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket>;

  constructor(private basketService: BasketsService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

}
