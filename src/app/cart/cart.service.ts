import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private api_cart_url = environment.apiUrl + '/cart';
  private api_checkout_url = environment.apiUrl + '/checkout';
  constructor(private httpClient :HttpClient) { }
  addToCart(product : Product) : Observable<Product> {
    return this.httpClient.post<Product>(this.api_cart_url, product);
  }
  getCartItems() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.api_cart_url); 
  }
  clearCart() : Observable<void> {
    return this.httpClient.delete<void>(this.api_cart_url);
  }
  checkOut(products : Product[] ): Observable<void> {
    return this.httpClient.post<void>(this.api_checkout_url, products);
  }
}
