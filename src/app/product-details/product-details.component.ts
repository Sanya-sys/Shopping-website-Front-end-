import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id;
  result;
  constructor(private dataservice: DataService, private route:ActivatedRoute, private service:HttpService,private router:Router) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id=params.get('id');
  });
  this.dataservice.getProductsById(this.id).subscribe(response => {
    console.log(response);
    this.result=response;
    console.log(this.result);

    });
}

}
