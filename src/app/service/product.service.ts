import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  public products(){
    return this._http.get(`${baseUrl}/product/`);
  }

  public addProduct(product: any){
    return this._http.post(`${baseUrl}/product/`,product);
  }

}
