import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Facundo";
  genero: string = "masculino";

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pablo', 'Tigre', 'Ramona', 'Marcos', 'Lucas'];
  clientesMapa = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': "cliente esperando",
    'other': "tenemos # clientes esperando"
  }

  //Extra
  cambiarNombre(): void {
    this.nombre = "Carla";
    this.genero = "femenino";

  }
  eleminarCliente(): void {
    console.log(this.clientes.pop());

  }

  // KeyValue Pipe
  persona = {
    nombre: 'Facundo',
    edad: 35,
    direccion: 'Otawa, Canada'
  }

  // JsonPipe
  heroes = [{
    nombre: 'Superman',
    vuela: true

  },
  {
    nombre: 'Spiderman',
    vuela: false
  }
  ]

  //Async 
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setInterval(() => {
      resolve('Tenemos data de promesa')

    }, 500)

  })

}
