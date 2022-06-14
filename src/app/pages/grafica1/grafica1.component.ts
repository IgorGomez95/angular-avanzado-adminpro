import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels1: string[] = ['Harina', 'Pan', 'Refresco'];
  public data1 = [
    {
      data: [ 10, 30, 54 ],
      backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
      hoverBackgroundColor: ['#443998','#016ea4','#b81844'],
      hoverBorderColor:['#6857E6','#009FEE','#F02059']
    },
  ];

  public labels2: string[] = ['Caja Registradora', 'Monitor', 'Windows'];
  public data2 = [
    {
      data: [ 1, 2, 1 ],
      backgroundColor: [ '#960000', '#d4b000', '#a86500' ],
      hoverBackgroundColor: ['#de0101','#f0c800','#e88c01'],
      hoverBorderColor:['#960000','#d4b000','#a86500']
    },
  ];

  public labels3: string[] = ['Marzo', 'Abril', 'Mayo'];
  public data3 = [
    {
      data: [ 21320, 21306, 20320 ],
      backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
      hoverBackgroundColor: ['#443998','#016ea4','#b81844'],
      hoverBorderColor:['#6857E6','#009FEE','#F02059']
    },
  ];

  public labels4: string[] = ['Marzo', 'Abril', 'Mayo'];
  public data4 = [
    {
      data: [ 15005, 12323, 14565 ],
      backgroundColor: [ '#960000', '#d4b000', '#a86500' ],
      hoverBackgroundColor: ['#de0101','#f0c800','#e88c01'],
      hoverBorderColor:['#960000','#d4b000','#a86500']
    },
  ];

}
