import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl : string = environment.apiUrl + "/products";
  constructor(private httpClient : HttpClient) { }
  getProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }
}
