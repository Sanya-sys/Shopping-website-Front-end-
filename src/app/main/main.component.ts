import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
result:any;
  constructor(private activatedroute: ActivatedRoute, private dataservice: DataService,private router:Router) {
    this.dataservice.products().subscribe(res => { this.result=res;console.log(this.result);})
   }

  ngOnInit() {
  }

}
