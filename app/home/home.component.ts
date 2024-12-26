import { FormsModule } from '@angular/forms';
import { ProductsService } from './../../services/products.service';
import { Component, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productService: ProductsService = inject(ProductsService);

  products: any[] = [];

  ngOnInit() {
    this.products = this.productService.fetchProducts();
    console.log(this.products[0]);
  }
}
