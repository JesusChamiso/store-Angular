import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({required: true}) img = '';
  @Input({required: true}) price = 0;
  @Input({required: true}) title = '';

  @Output() addToCart = new EventEmitter();
  addToCartHandler() {
    console.log('click from Child');
    this.addToCart.emit(
      'Hola este es un mensaje desde el hijo '+ this.title
    );
  }

}
