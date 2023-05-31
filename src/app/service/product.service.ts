import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { Iproduct } from '../interface/product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct() : Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>("http://localhost:4000/product")
  }
  getProduct(id: number) : Observable<Iproduct> {
    return this.http.get<Iproduct>(`http://localhost:4000/product/${id}`)
  }
  createProduct(product: Iproduct) : Observable<Iproduct> {
    return this.http.post<Iproduct>("http://localhost:4000/product", product)
  }
  deleteProduct(id: number) : Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`http://localhost:4000/product/${id}`)
  }
  updateProduct(product: Iproduct) : Observable<Iproduct[]> {
    return this.http.put<Iproduct[]>(`http://localhost:4000/product/${product.id}`, product)
  }
}
