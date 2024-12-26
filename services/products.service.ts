import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  data: any[] = [];

  //myObservable = of(Products);   it also works as the same
  myObservable = new Observable((observer) => {
    observer.next(Products);
  });

  fetchProducts() {
    this.myObservable.subscribe((data: any) => {
      this.data = data;
    });
    return this.data;
  }
}
