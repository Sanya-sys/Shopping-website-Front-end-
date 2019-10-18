import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private service:AppService,private router:Router) { }

  ngOnInit() {
  }
logout()
{
  sessionStorage.removeItem('token');
  this.service.isLoggedIn(false);
  this.router.navigate(['login']);
}
cart()
{
  this.router.navigate(['/cart']);
}
log()
{
  this.router.navigate(['/login']);
}
}
