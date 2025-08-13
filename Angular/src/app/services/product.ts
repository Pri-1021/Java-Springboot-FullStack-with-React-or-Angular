import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
  // This makes sure that this service is available to all components.
})
export class Product {
  constructor(private http: HttpClient) {}

  getAllProducts():  Observable<any> {
    return this.http.get("http://localhost:8080/products")
  }

  deleteProduct(product: any){
      return this.http.delete(`http://localhost:8080/products/${product.id}`)
      // this.products.filter((p: { id: any; })=> p.id !== product.id);

  }
}
