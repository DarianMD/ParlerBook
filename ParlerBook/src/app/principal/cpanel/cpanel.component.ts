import { Component, OnInit, Input } from '@angular/core';
import { personaje } from '../usuario-registro/usuario-registro.component';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css']
})
export class CpanelComponent implements OnInit  {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item = personaje




  del_usr(array: any){
    personaje.splice(array,1)
  }



}
