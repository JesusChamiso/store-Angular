import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  constructor() {
    const initProducts: Product[] =[
      { id:Date.now(), title: 'Product 1', price: 12, img: 'https://picsum.photos/640/640?r=23', createdAt: new Date().toISOString() },
      { id:Date.now(), title: 'Product 2', price: 120, img: 'https://picsum.photos/640/640?r=25', createdAt: new Date().toISOString() },
      { id:Date.now(), title: 'Product 3', price: 100, img: 'https://picsum.photos/640/640?r=28', createdAt: new Date().toISOString() },
      { id:Date.now(), title: 'Product 4', price: 56, img: 'https://picsum.photos/640/640?r=29', createdAt: new Date().toISOString() },
      { id:Date.now(), title: 'Product 5', price: 87, img: 'https://picsum.photos/640/640?r=90', createdAt: new Date().toISOString() },
      { id:Date.now(), title: 'Product 6', price: 23, img: 'https://picsum.photos/640/640?r=91', createdAt: new Date().toISOString() },
      { id:Date.now(), title: 'Product 7', price: 98, img: 'https://picsum.photos/640/640?r=92', createdAt: new Date().toISOString() },
    ];
    this.products.set(initProducts);
  }
addToCart(product: Product) {
  this.cartService.addToCart(product);
}
}
