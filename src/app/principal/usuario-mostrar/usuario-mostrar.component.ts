import { Component, OnInit, Input } from '@angular/core';
import { personaje } from '../usuario-registro/usuario-registro.component';


@Component({
  selector: 'app-usuario-mostrar',
  templateUrl: './usuario-mostrar.component.html',

  styleUrls: ['./usuario-mostrar.component.css']


})
export class UsuarioMostrarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item = personaje


  show: boolean = false;
  usact: string = "prueba";


}
