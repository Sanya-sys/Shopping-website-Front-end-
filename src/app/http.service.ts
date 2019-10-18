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
    return this.http.get("http://localhost:8081/product/productdetails",{headers});
  }
  getProductById(id)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/product/productss/id/"+id ,{headers});
  }
  getProductByCategory(category:String)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/product/products/category/"+category,{headers});
  }
  getByprice(n1,n2)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/getbyprice/"+n1+"/"+n2,{headers});
  }
  showcart()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/cart/showcart/recieve",{headers});
  }
  addProductToCart(productid:Number)
  {
    console.log(productid);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/cart/addtocart/recieve/"+productid, {headers});
  }
deleteproduct(productid:Number)
  {
    console.log(productid);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/cart/deleteproduct/recieve/"+productid, {headers});
  }
  removeproductFromCart(productid:Number)
  {
    console.log(productid);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/cart/removeproduct/recieve/"+productid, {headers});
  }
  checkout()
  {
   
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/cart/checkout/recieve", {headers});
  }
  getinfo()
  {
   
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/profile/get", {headers});
  }
  gethistoryorder()
  {
   
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/cart/orderhistory/recieve", {headers});
  }
clearCart()
{
  const token=sessionStorage.getItem("token");
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.http.get("http://localhost:8081/cart/clearcart", {headers});
}
updateProfile()
{
  const token=sessionStorage.getItem("token");
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.http.put("http://localhost:8081/profile/update", {headers});
}
addProductsToDb(json)
{
  const token=sessionStorage.getItem("token");
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.http.post<any>("http://localhost:8081/product/addproducts", json,{headers});
}
}
