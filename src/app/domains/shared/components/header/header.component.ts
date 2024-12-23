import { Component, Input, signal, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges {
  hideSideMenu = signal(true);
  @Input({ required: true }) cart: Product[] = [];
  total = signal(0);
  toogleSideMenu() {
    this.hideSideMenu.update((value) => !value);
  }

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if(cart && cart.currentValue !== cart.previousValue) {
      this.total.set(this.calcTotal());
    }
  }

  calcTotal () {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
