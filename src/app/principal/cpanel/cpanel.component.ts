import { Component, OnInit, Input } from '@angular/core';
import { personaje } from '../usuario-registro/usuario-registro.component';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Estas seguro?',
      text: "Los datos no se podrán recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        personaje.splice(array,1)

      }
    })
  }



}
