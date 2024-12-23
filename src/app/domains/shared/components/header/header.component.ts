import { CartService } from './../../services/cart.service';
import { Component, signal, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  toogleSideMenu() {
    this.hideSideMenu.update((value) => !value);
  }
}
