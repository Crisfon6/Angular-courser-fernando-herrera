import { Component, OnDestroy, AfterViewChecked, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, SimpleChanges, Input } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component  implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  name:string='Cristhian';
  seconds =0;
  timerSubscription!:Subscription;
  constructor(){
    console.log('contructor');
  }
  ngDoCheck(): void {
console.log('Do check');
  }
  ngAfterContentInit(): void {
console.log('aftercontent init');
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
    
  }
  ngAfterViewInit(): void {
    console.log('after view init');
    
  }
  ngAfterViewChecked(): void {
    console.log('after view checked');    
  }
  ngOnDestroy(): void {
   console.log('on destroy');
   
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ng on init');
  this.timerSubscription=  interval(1000).subscribe(i=>{
      // console.log(i);
      this.seconds = i;
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('ng on changes');
      
  }
  save(){
    console.log('save');
  }
  OnDestroy(){
this.timerSubscription.unsubscribe();
  }
}
