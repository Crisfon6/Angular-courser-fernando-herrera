import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../services/charts.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-donuts-http',
  templateUrl: './donuts-http.component.html',
  styles: [],
})
export class DonutsHttpComponent implements OnInit {
  loadingData = true;
  constructor(private chartsService: ChartsService) {}
  ngOnInit(): void {
  //  this.getDataNoRxJs();
   this.getDataRxJs();
  }
  getDataRxJs(){
    this.chartsService.getUsersSocialNetworksRxJs().subscribe((data) => {
      if(data){
        this.doughnutChartData = data;
        this.loadingData=false;
      }
    });
  }
  getDataNoRxJs(){
    this.chartsService.getUsersSocialNetworks().subscribe((data) => {
      if (data) {
        this.doughnutChartData  =  {
          labels:  Object.keys(data),
          datasets: [
            { data: Object.values(data) }
          ]
        }   
        this.loadingData = false;

      }
    });
  }
  // Doughnut
  public doughnutChartData!: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
