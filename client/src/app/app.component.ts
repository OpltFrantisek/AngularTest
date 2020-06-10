import { Component, OnInit } from '@angular/core';
import { BasketsService } from './basket/baskets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor(private basketService: BasketsService){}

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id');
    if(basketId){
      this.basketService.getBasket(basketId).subscribe( () => {
        console.log('init basket');
      }, error =>{
        console.log(error);
      });
    }
  }

}
