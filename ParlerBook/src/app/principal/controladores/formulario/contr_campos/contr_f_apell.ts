import { Reglas } from "../../../models/reglas_campos";
import Swal from "sweetalert2"


let reglas = new Reglas();




export class apell{

    constructor(){

    }


    long_min(apellido:string): boolean {
    if(apellido.length > reglas.cp_min){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: apellido + 'El campo es vacio'
      })
      return false
    }

  }

  long_max(apellido:string): boolean {
    if(apellido.length <= reglas.cp_max_usr){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: apellido,
        text: 'Maximo ' + reglas.cp_max_usr + ' caracteres'
      })
      return false
    }

  }


    regex(apellido:string): boolean {
    if(reglas.regex_usr.test(apellido)){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: apellido,
        text: 'Contiene caracteres invalidos'
      })
      return false
    }

  }




}

