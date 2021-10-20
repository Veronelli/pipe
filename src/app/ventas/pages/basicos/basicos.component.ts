import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "facundo";
  nombreUpper: string = "FACUNDO";
  nombreCompleto: string = "facUnDo veRonelLi";

  fecha: Date = new Date();

  constructor() { }


}
