import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SousCategoryService {

  constructor(private _http:HttpClient) { }

  public sousCategories(){
    return this._http.get(`${baseUrl}/sousCategory/`);
  }


  public addSCategory(ScategoryData: any){
    return this._http.post(`${baseUrl}/sousCategory/`,ScategoryData);
  }
}
