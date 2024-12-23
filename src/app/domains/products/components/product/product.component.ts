import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [UpperCasePipe, CurrencyPipe,DatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();
  addToCartHandler() {
      this.addToCart.emit(this.product)
  }

}
