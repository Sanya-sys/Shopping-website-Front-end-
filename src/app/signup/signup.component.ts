import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserService } from '../get-user.service';
import {posts} from '../posts';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
post1=new posts("" , 1 , "" ,"fff");
  constructor(private router:Router, private service: GetUserService) { }

  ngOnInit() {
  }
onselect1()
{
  this.router.navigate(['/login'])
}
onselect4()
{
  this.router.navigate(['/home'])
}
onselect5()
{
  this.router.navigate(['/login'])
}
onsubmit()
{
   console.log(this.post1);
  this.router.navigate(['/login'])
  this.service.post1_user(this.post1).subscribe(
    data=> console.log("SUCCESS",data),
    error => console.log("ERROR",error)
    
  )
}
}
