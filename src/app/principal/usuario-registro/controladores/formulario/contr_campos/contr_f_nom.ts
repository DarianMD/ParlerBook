import { Reglas } from "../../../../usuario-registro/models/reglas_campos";
import Swal from "sweetalert2"


let reglas = new Reglas();


export class nom{

    constructor(){

    }


    long_min(nombre:string): boolean {
    if(nombre.length > reglas.cp_min){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: nombre + 'Nom: El campo es vacio'
      })
      return false
    }

  }

  long_max(nombre:string): boolean {
    if(nombre.length <= reglas.cp_max_usr){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: nombre,
        text: 'Nom: Maximo ' + reglas.cp_max_usr + ' caracteres'
      })
      return false
    }

  }

  regex(nombre:string): boolean {
    if(reglas.regex_nom.test(nombre)){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: nombre,
        text: 'Nom: Contiene caracteres invalidos'
      })
      return false
    }

  }






}

