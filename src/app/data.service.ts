import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  products()
  {
    return this.http.get("http://localhost:8080/product/productdetails");
  }
  getProductByCategory(category : String)
  {
    return this.http.get("http://localhost:8080/product/products/category/"+category);
  }
  getProductById(id : Number)
  {
    return this.http.get("http://localhost:8080/product/productss/id/"+id);
  }
  getPriceBetween(p1:Number,p2:Number)
  {
    return this.http.get("http://localhost:8080/product/getbyprice/"+p1+"/"+p2);
 }
}
