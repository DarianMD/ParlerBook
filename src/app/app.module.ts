import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

import { PrincipalModule } from './principal/principal.module';
import { UsuarioMostrarComponent } from './principal/usuario-mostrar/usuario-mostrar.component';






@NgModule({
  declarations: [
    AppComponent,
    UsuarioMostrarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
