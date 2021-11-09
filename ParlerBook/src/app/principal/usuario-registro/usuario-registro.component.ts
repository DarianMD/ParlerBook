import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario';
import { contr_apell, contr_contr, contr_corr, contr_desc, contr_edad, contr_foto, contr_nom, contr_usuario } from './controladores/formulario/contr_form';
import Swal from 'sweetalert2';

export let personaje: Usuario[] = [
 {usuario: "Paco", nombre:"pacos", apellido:"pacos", edad: 20, descripcion: "sexo duro",foto: "paco",correo: "darian@gmail.com", contrasena: "1234"}
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


   conf_contr: string = "";

  realizar(){
    contr_usuario(this.regla.usuario)
    contr_nom(this.regla.nombre)
    contr_apell(this.regla.apellido)
    contr_edad(this.regla.edad);
    contr_desc(this.regla.descripcion);
    contr_corr(this.regla.correo)
    contr_contr(this.regla.contrasena, this.conf_contr)


    if(contr_usuario(this.regla.usuario) && contr_nom(this.regla.nombre)
    && contr_apell(this.regla.apellido) && contr_edad(this.regla.edad)
    && contr_desc(this.regla.descripcion) && contr_corr(this.regla.correo) && contr_contr(this.regla.contrasena, this.conf_contr)){
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
    let foto_compr = contr_foto(this.regla.nombre,this.regla.apellido, this.regla.foto)

    personaje.push({usuario: this.regla.usuario, nombre: this.regla.nombre, apellido: this.regla.apellido, edad:
      this.regla.edad, foto: String(foto_compr), descripcion: this.regla.descripcion, correo: this.regla.correo, contrasena: this.regla.contrasena})

  }



  del_usr(array: any){
    personaje.splice(array,1)
  }


    show: boolean = true



}
