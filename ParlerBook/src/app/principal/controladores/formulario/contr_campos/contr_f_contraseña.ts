import { Reglas } from "../../../models/reglas_campos";
import Swal from "sweetalert2"


let reglas = new Reglas();


export class contrasena{

    constructor(){

    }


    long_min(contrasena:string): boolean {
    if(contrasena.length > reglas.cp_min_desc){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: contrasena + 'El campo es vacio'
      })
      return false
    }

  }

  long_max(contrasena:string): boolean {
    if(contrasena.length <= reglas.cp_max_usr){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: contrasena,
        text: 'Maximo ' + reglas.cp_max_usr + ' caracteres'
      })
      return false
    }

  }



  comp_contr(contrasena: string, conf_co:string): boolean{
    if(contrasena == conf_co){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: contrasena,
        text: 'La contraseña no coincide'
      })
      return false
    }
  }



}

