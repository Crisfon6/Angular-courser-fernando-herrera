import { Color, Hero } from './../../interfaces/sells.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css'],
})
export class OrdenComponent {
  mayus: boolean = true;
  orderBy: string = 'name';
  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'Wonder woman',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Aquaman',
      fly: false,
      color: Color.blue,
    },
  ];
}
