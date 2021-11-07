import { Reglas } from "../../../models/reglas_campos";
import Swal from "sweetalert2"
import { personaje } from "../../../usuario-registro/usuario-registro.component";


let reglas = new Reglas();
let si = 0;




export class usr{

    constructor(){

    }



    long_min(usuario:string): boolean {
    if(usuario.length > reglas.cp_min){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: usuario + 'El campo es vacio'
      })
      return false
    }

  }


    long_max(usuario:string): boolean {
    if(usuario.length <= reglas.cp_max_usr){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: usuario,
        text: 'Maximo ' + reglas.cp_max_usr + ' caracteres'
      })
      return false
    }

  }


    regex(usuario:string): boolean {
    if(reglas.regex_usr.test(usuario)){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: usuario,
        text: 'Contiene caracteres invalidos'
      })
      return false
    }

  }


  usr_exist(usuario:string): boolean{
    for (let i = 0; i < personaje.length; i++) {
      if (usuario === String(personaje.map( i => i.usuario)[i])) {
        si++;
      }

    }

    if(si === 0){
      return true;
    }
    else{
        si = 0;
        Swal.fire({
          icon: 'error',
          title: usuario,
          text: 'El usuario ya existe'
        })
      return false;
    }
}

}

