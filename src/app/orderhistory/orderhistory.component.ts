import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { GetUserService } from '../get-user.service';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
cart;
  constructor(private service1 : HttpService,private service:AppService,private router:Router) { }

  ngOnInit() {
    return this.service1.gethistoryorder().subscribe((data)=>
    {
      this.cart=data;
    });
  }
  logout()
  {
    sessionStorage.removeItem('token');
    this.service.isLoggedIn(false);
    this.router.navigate(['login']);
  }
}
