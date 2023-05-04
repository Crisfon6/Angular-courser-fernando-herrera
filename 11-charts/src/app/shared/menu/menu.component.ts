import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  text:string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent {
menu : MenuItem[] =[
  {
    route: '/charts/bar',
    text: 'Bars'
  },
  {
    route: '/charts/double-bar',
    text: 'Double Bar'
  },
  {
    route: '/charts/donut',
    text: 'Donuts'
  },
  {
    route: '/charts/donuts-http',
    text: 'Donuts Http'
  },

]
}
