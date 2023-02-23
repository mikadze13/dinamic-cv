import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { FirebaseService } from 'src/app/service/firebase.service';
@Component({
  selector: 'app-cvprofile',
  templateUrl: './cvprofile.component.html',
  styleUrls: ['./cvprofile.component.css']
})
export class CvprofileComponent implements OnInit {
  array:any=[]
  @Output() isLogout = new EventEmitter<void>()
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      // const myArray = this.route.snapshot.queryParamMap.get('myArray');
    // if (myArray === null) {
    //   this.arrayOfValues = new Array<string>();
    //   console.log(this.arrayOfValues)
    // } else {
    //   this.arrayOfValues = JSON.parse(myArray);
    //   console.log(this.arrayOfValues)
    // } 
    this.array.push(params)
    console.log(this.array)
    
    })
     
  } 
 

}
