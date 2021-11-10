import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpanelComponent } from './principal/cpanel/cpanel.component';
import { UsuarioRegistroComponent } from './principal/usuario-registro/usuario-registro.component';
import { UsuarioMostrarComponent } from './principal/usuario-mostrar/usuario-mostrar.component';

const routes: Routes = [
  { path: 'cpanel', component: CpanelComponent },
  { path: 'usuario-registro', component: UsuarioRegistroComponent},
  { path: 'usuario-mostrar', component: UsuarioMostrarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
