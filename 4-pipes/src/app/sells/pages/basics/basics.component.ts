import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent implements OnInit {
  lowerName: string = 'cris';
  upperName: string = 'CRIS';
  fullName: string = 'CRIS fonsecA';
  date: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
}
