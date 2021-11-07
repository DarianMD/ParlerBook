import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { contr_apell, contr_nom, contr_usuario } from '../controladores/formulario/contr_form';
import Swal from 'sweetalert2';

export let personaje: Usuario[] = [
  {usuario: "UsuarioX", nombre: "nom_default", apellido: "apellido_default"/*, nombre: "Usuario", apellido: "Default", edad: 0, sexo: "", descripcion: "", correo: "", contraseña: "" */}

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
    contr_nom(this.regla.nombre)
    contr_apell(this.regla.apellido)

    if(contr_usuario(this.regla.usuario) && contr_nom(this.regla.nombre) && contr_apell(this.regla.apellido)){
      Swal.fire({
        icon: 'success',
        title: 'Registro Correcto',
        showConfirmButton: false,
        timer: 1500
      })
      this.commitDates();
    }




  }

  commitDates(){
    personaje.push({usuario: this.regla.usuario, nombre: this.regla.nombre, apellido: this.regla.apellido})
  }

}
