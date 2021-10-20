import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Fernando";
  valor: number = 111000;
  obj = {
    nombre: "Facundo"

  }

  mostrarNombre(nombre: string) {
    this.nombre = nombre;

  }
}
