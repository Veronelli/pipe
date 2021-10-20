import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          }, {
            label: 'Números',
            icon: 'pi pi-align-left',
            routerLink: '/numeros'
          }, {
            label: 'No Comunes',
            icon: 'pi pi-align-left',
            routerLink: '/no-comunes'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog'
      }
    ]
  }
}
