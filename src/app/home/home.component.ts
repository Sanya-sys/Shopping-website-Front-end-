import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

result:any;
my:any;
  constructor(private activatedroute: ActivatedRoute, private dataservice: DataService,private router:Router) { 
    this.dataservice.products().subscribe(res => { this.result=res;console.log(this.result);})
  }

  ngOnInit() {
   
  }
  
  onclick1(id)
  {
    this.router.navigate(['/productdetails/'+id]);
  

}
showCategory(category)
{
  if(category=='All')
  {
    this.dataservice.products().subscribe(response => {this.result=response;});
  }
  else
  {
    this.dataservice.getProductByCategory(category).subscribe(response => {this.result=response;console.log(this.result)})
  }
}
pricefilters($event,n1:number,n2:number)
{
this.dataservice.getPriceBetween(n1,n2).subscribe((data1)=>{this.result=data1;});

}

}
