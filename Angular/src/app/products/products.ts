import {Component, OnInit} from '@angular/core';
import {Product} from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone : true
})
export class Products implements OnInit {
  products : any;

  constructor(private Product : Product) {
  }
  // this methode execute at the start of the application
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(): void {
    this.products= this.Product.getAllProducts().subscribe({
      next: response => { this.products = response;},
      error: error => console.log(error)
    })
  }
  deleteProduct(product: any):  void{
    let Confirmed = confirm("Are you sure you want to delete this product?");
    if (Confirmed) {
      this.Product.deleteProduct(product).subscribe({
        next: response => { this.Product.getAllProducts();},
        error: error => console.log(error)
      });
      this.getProducts();
    }
  }
}
