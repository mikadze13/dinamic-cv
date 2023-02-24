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
  show:boolean=false;
  count:number = 0  
  range1:any
  range2:any
  range3:any
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

  changeStyle(){
    this.count++
    if(this.count%2!=0){
      this.show=true 
    }else{
      this.show=false
    }
  }
  red(){
    const inp1 = document.querySelector('.red')  as HTMLInputElement
    this.range1 = inp1.valueAsNumber
    console.log(this.range1)
  }
 green(){

 }
 blue(){

 }
}
