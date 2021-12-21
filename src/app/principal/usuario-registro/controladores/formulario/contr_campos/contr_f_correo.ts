import { Reglas } from "../../../../usuario-registro/models/reglas_campos";
import Swal from "sweetalert2"


let reglas = new Reglas();


export class correo{

    constructor(){

    }


    long_min(desc:string): boolean {
    if(desc.length > reglas.cp_min_correo){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: desc + 'Correo: El campo esta vacio'
      })
      return false
    }

  }

  long_max(desc:string): boolean {
    if(desc.length <= reglas.cp_max_correo){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: desc,
        text: 'Correo: Maximo ' + reglas.cp_max_usr + ' caracteres'
      })
      return false
    }

  }

  regex(desc:string): boolean {
    if(reglas.regex_correo.test(desc)){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: desc,
        text: 'Correo: Contiene caracteres invalidos'
      })
      return false
    }

  }








}

