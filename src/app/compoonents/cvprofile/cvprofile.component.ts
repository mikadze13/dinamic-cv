import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { FirebaseService } from 'src/app/service/firebase.service';
@Component({
  selector: 'app-cvprofile',
  templateUrl: './cvprofile.component.html',
  styleUrls: ['./cvprofile.component.css']
})
export class CvprofileComponent implements OnInit {
  array: any = []
  show: boolean = false;
  count: number = 0
  range1: any = 130
  range2: any = 130 
  range3: any = 130
  backgroundColor: any
  @Output() isLogout = new EventEmitter<void>()
  constructor(private route: ActivatedRoute, private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.array.push(params)
      console.log(this.array)

    })

  }

  changeStyle() {
    this.count++
    if (this.count % 2 != 0) {
      this.show = true
    } else {
      this.show = false
    }
  }
  red() {
    const inp1 = document.querySelector('.red') as HTMLInputElement
    this.range1 = inp1.valueAsNumber
    return this.range1
  }
  green() {
    const inp2 = document.querySelector('.green') as HTMLInputElement
    this.range2 = inp2.valueAsNumber
    return this.range2
  }
  blue() {
    const inp3 = document.querySelector('.blue') as HTMLInputElement
    this.range3 = inp3.valueAsNumber
    return this.range3
  }
  backgroundColorRange() {
    this.backgroundColor = `rgb(${this.red()}, ${this.blue()}, ${this.green()})` 
    const el = this.el.nativeElement.querySelector('.main');
    this.renderer.setStyle(el, 'background-color', this.backgroundColor); 
  }
}