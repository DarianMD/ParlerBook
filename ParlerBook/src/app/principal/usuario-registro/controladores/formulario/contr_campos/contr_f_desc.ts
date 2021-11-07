import { Reglas } from "../../../../usuario-registro/models/reglas_campos";
import Swal from "sweetalert2"


let reglas = new Reglas();


export class desc{

    constructor(){

    }


    long_min(desc:string): boolean {
    if(desc.length > reglas.cp_min_desc){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: desc + 'El campo es vacio'
      })
      return false
    }

  }

  long_max(desc:string): boolean {
    if(desc.length <= reglas.cp_max_dec){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: desc,
        text: 'Maximo ' + reglas.cp_max_dec + ' caracteres'
      })
      return false
    }

  }

  regex(desc:string): boolean {
    if(reglas.regex_nom.test(desc)){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: desc,
        text: 'Contiene caracteres invalidos'
      })
      return false
    }

  }






}

