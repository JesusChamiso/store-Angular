import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent implements OnInit {
  @Input() id?: number
  product = signal<Product | null>(null);
  cover = signal<string | null>(null);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit() {
    if(this.id){
      this.productService.getOne(this.id)
      .subscribe({
        next: (product)=>{
          this.product.set(product);
          if(product.images.length > 0){
            this.cover.set(product.images[0]);
          }
        }
      })
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }

  addToCart(){
    const product = this.product();
    if (product){
      this.cartService.addToCart(product);
    }
  }
  

}
