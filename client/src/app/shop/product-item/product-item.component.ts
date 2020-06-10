import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { BasketsService } from 'src/app/basket/baskets.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
 @Input() product: IProduct;

  constructor(private basketService: BasketsService) { }

  ngOnInit(): void {
  }
  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }
}
