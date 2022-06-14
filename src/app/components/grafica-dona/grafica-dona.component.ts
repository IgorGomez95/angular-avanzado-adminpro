import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent implements OnInit {
  @Input() public labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() public dataSet!: any;
  @Input() public title: string = 'Sin Título';
  // Doughnut
  public doughnutChartData!: ChartData<'doughnut'>;

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.labels,
      datasets: this.dataSet
    };
  }
  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
