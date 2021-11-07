import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { CpanelComponent } from './cpanel/cpanel.component';



@NgModule({
  declarations: [
    UsuarioRegistroComponent,
    CpanelComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UsuarioRegistroComponent,
    CpanelComponent
  ]
})
export class PrincipalModule { }
