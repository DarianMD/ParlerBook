import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { contr_usuario } from '../controladores/formulario/contr_form';

export let personaje: Usuario[] = [
  {usuario: "UsuarioX"/*, nombre: "Usuario", apellido: "Default", edad: 0, sexo: "", descripcion: "", correo: "", contraseña: "" */}

];




@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   regla = new Usuario();


  pers = personaje;




  registro(){

  }



  realizar(){
    contr_usuario(this.regla.usuario)

    if(contr_usuario(this.regla.usuario)){
      this.commitDates();
    }



  }

  commitDates(){
    personaje.push({usuario: this.regla.usuario})
  }

}
