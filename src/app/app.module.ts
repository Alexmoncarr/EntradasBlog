import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Entrada1Component } from './entrada1/entrada1.component';
import { Entrada2Component } from './entrada2/entrada2.component';
import { Entrada3Component } from './entrada3/entrada3.component';

@NgModule({
  declarations: [
    AppComponent,
    Entrada1Component,
    Entrada2Component,
    Entrada3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
