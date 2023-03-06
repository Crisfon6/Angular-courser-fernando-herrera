import { Component } from '@angular/core';
interface MenuItem{
  path:string;
  name:string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `li{
      cursor:pointer;
    }`
  ]
})
export class MenuComponent {
  menuItems:MenuItem[]=[
    {
      path:'/maps/fullscreen',
      name:'fullscreen'
    },
    {
      path:'/maps/zoom-range',
      name:'Zoom range'
    },
    {
      path:'/maps/marks',
      name:'Marks'
    },
    {
      path:'/maps/properties',
      name:'Properties'
    },
   
  ]
}
