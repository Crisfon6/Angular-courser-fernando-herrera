import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-double-bar',
  templateUrl: './double-bar.component.html',
  styles: [
  ]
})
export class DoubleBarComponent {
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
   
  };

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A',backgroundColor: '#51EDA0'  , hoverBackgroundColor: '#F7549F'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B',backgroundColor:'#F2F754'  , hoverBackgroundColor: '#F7549F'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Cris' ,backgroundColor:'#E0A158' , hoverBackgroundColor: '#F7549F'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Batman',backgroundColor: '#9D98EF'  , hoverBackgroundColor: '#F7549F'}
    ]
  };
}
