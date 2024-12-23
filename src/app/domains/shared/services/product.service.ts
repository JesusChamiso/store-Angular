import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
// import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private apiUrlProducts = 'https://api.escuelajs.co/api/v1/products';

  getProducts() {
    // aqui se puede retirar el pipe() si el servicio de API tiene el campo createdAt, en este caso como no Lo tiene se agrega uno aleatorio
    // return this.http.get<Product[]>(this.apiUrlProducts).pipe(
    //   map((products) => 
    //     products.map(
    //       (product)=>({
    //         ...product,
    //         createdAt: product.createdAt || this.getRandomDate(new Date(2022, 0, 1), new Date(2024, 11,31))
    //       })
    //   ))
    // );
    return this.http.get<Product[]>(this.apiUrlProducts);
  }

  // getRandomDate(start: Date,end: Date):string {
  //   const randomTime = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  //   return randomTime.toISOString();
  // }

  getOne(id:number) {
    return this.http.get<Product>(this.apiUrlProducts+`/${id}`);
  }
}
