import { Component,Input,ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styles: [
  ]
})
export class ChartBarComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() barChartData!: ChartData<'bar'>;
  @Input() barChartOptions: ChartConfiguration['options'];
  public barChartType:any = 'bar';  

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}
