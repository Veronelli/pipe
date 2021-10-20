import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import localeEs from '@angular/common/locales/es-AR';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeEs);
registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule

  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-AR" }],
  bootstrap: [AppComponent]

})
export class AppModule { }
