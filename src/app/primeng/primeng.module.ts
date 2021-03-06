import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { MenubarModule } from 'primeng/menubar'
import { MenuItem } from 'primeng/api'
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimengModule { }
