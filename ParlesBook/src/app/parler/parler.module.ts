import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';




@NgModule({
  declarations: [
    PaginaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginaComponent
  ]
})
export class ParlerModule { }
