import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart;
total=0;

i;
  constructor(private route:Router,private service: HttpService,private activatedroute:ActivatedRoute, private service1:AppService) { }

  ngOnInit() {
    return this.service.showcart().subscribe((data) => 
    {
      this.cart=data;
      this.findtotal();
  
    });
  
  }
deleteproduct(id)
{
  this.service.deleteproduct(id).subscribe((data)=>{this.service.showcart().subscribe((data1)=>{this.cart=data1;});});
}
decreaseproduct(id)
{
  this.service.removeproductFromCart(id).subscribe((data)=>{this.service.showcart().subscribe((data2)=>{this.cart=data2; this.findtotal()});
 console.log(this.cart);
 
});

}
increaseproduct(id)
{
  this.service.addProductToCart(id).subscribe((data)=>{
    this.service.showcart().subscribe((data3)=>{this.cart=data3; this.findtotal()});});

  console.log(this.cart);
  
}
findtotal()
{ 
  this.total = 0;
  for(let i=0;i<this.cart.length;i++)
  {
this.total+=this.cart[i].items.productPrice * this.cart[i].quantity;
  }
  console.log(this.total);
}
checkOut()
{
  this.service.checkout().subscribe((data5) =>
  {

this.route.navigate(['/orderhistory']);

  });
}
logout()
{
  sessionStorage.removeItem('token');
  this.service1.isLoggedIn(false);
  this.route.navigate(['login']);
}
}
