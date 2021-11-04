import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';



@NgModule({
  declarations: [
    UsuarioRegistroComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UsuarioRegistroComponent
  ]
})
export class PrincipalModule { }
