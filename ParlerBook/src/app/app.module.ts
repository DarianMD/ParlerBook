import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioRegistroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
