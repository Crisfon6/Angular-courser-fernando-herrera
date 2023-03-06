import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styleUrls: ['./no-common.component.css'],
})
export class NoCommonComponent {
  name: string = 'Susana';
  gender: string = 'femenino';
  invitationMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //i18nplura
  clients: string[] = ['cris', 'fonseca', 'javier'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };
  deleteClient() {
    this.clients.pop();
  }
  changeClient() {
    this.name = 'Cristhian';
    this.gender = 'masculino';
  }

  //keyvalue pipe
  person = {
    name: 'cristhian',
    age: 23,
    country: 'colombia',
  };
  //json pipe
  heroes = [
    {
      name: 'batman',
      power: 'money',
    },
    {
      name: 'flash',
      power: 'speed',
    },
    {
      name: 'robin',
      power: 'figth',
    },
  ];
  //async pipe
  myObservable = interval(1000);
  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Finish promise');
    }, 3500);
  });
}
