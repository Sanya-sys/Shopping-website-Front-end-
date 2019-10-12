import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getAllItems()
  {
    const token=sessionStorage.getItem("token");
    const headers = new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8080/product/productdetails");
  }
  getProductById(id)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8080/product/productss/id/"+id );
  }
  getProductByCategory(category:String)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8080/product/products/category/"+category);
  }
  getByprice(n1,n2)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8080/getbyprice/"+n1+"/"+n2);
  }
}
