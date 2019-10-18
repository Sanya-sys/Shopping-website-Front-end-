import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
result:any;
  constructor(private activatedroute: ActivatedRoute, private dataservice: DataService,private router:Router,private service:AppService) {
    this.dataservice.products().subscribe(res => { this.result=res;console.log(this.result);})
   }

  ngOnInit() {
  }
  logout()
{
  sessionStorage.removeItem('token');
  this.service.isLoggedIn(false);
  this.router.navigate(['login']);
}
log()
{
  this.router.navigate(['/login']);
}


}
