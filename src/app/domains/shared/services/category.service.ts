import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient)
  private apiUrlCategories = 'https://api.escuelajs.co/api/v1/categories';
  getAll(){
    return this.http.get<Category[]>(this.apiUrlCategories);
  }
}
