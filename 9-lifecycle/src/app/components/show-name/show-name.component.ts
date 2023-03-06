import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styles: [
  ]
})
export class ShowNameComponent implements OnChanges, OnInit{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ',changes);
    
  }
  ngOnInit(): void {
  }
  @Input() name!:string;



}
