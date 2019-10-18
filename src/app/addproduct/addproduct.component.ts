import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

   user;
    productName;
    productPrice;
    category;
   image;
   heading;
   description;
      constructor(private httpClientService: HttpService,private router:Router) { }
    
      ngOnInit() {
     
      }
      /*setCategory(category)
      {
      this.category=category;
      }*/
    addItem()
    {
    let json={
    "productName":this.productName,
    "productPrice":this.productPrice,
    "category":this.category,
    "heading":this.heading,
    "description":this.description
    
    };
    this.httpClientService.addProductsToDb(json).subscribe(
    response =>{console.log(response);alert("Product successfully added");}
    );
    }
    
}
