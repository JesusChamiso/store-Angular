import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
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
fromChild(event: string) {
  console.log(event);
  console.log('Estamos en el padre');
}
}
