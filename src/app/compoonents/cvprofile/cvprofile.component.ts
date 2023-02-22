import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
@Component({
  selector: 'app-cvprofile',
  templateUrl: './cvprofile.component.html',
  styleUrls: ['./cvprofile.component.css']
})
export class CvprofileComponent implements OnInit {
 

  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    })
  } 

}
