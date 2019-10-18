import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
myprod;
  constructor(private router:Router,private route:ActivatedRoute , private service2 : HttpService, private service:AppService,private http:HttpClient) { }

  ngOnInit() {
    this.service2.getinfo().subscribe(data=>
      {
        this.myprod=data;
      });
  }
  url="http://localhost:8081/profile/update"
update()
{
  const token=sessionStorage.getItem("token");
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.http.put(this.url,this.myprod, {headers}).subscribe(res =>
    {
      alert("created");
    });
}
logout()
{
  sessionStorage.removeItem('token');
  this.service.isLoggedIn(false);
  this.router.navigate(['login']);
}
}
