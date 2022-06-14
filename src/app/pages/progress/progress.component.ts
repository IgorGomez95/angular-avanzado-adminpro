import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progreso1: number = 50;
  progreso2: number = 30;

  get getProgreso1() {
    return `${ this.progreso1 }%`;
  }

  get getProgreso2() {
    return `${ this.progreso2 }%`;
  }

  cambiarValor1(valor: number) {
    if (this.progreso1 >= 100 && valor > 0) {
      this.progreso1 = 100;
      return;
    }
    if (this.progreso1 <= 0 && valor < 0) {
      this.progreso1 = 0;
      return;
    }
  }
}
