import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  personaje: Usuario[] = [
    {usuario: "UsuarioX", nombre: "Usuario", apellido: "Default", edad: 0, sexo: "", descripcion: "", correo: "", contraseña: "" }

  ];
  registro(){

  }


}
