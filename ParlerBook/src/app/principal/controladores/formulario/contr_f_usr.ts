import { Reglas } from "../../models/reglas_campos";
import Swal from "sweetalert2"
let reglas = new Reglas();



export function long_min(usuario:string): boolean {
  if(usuario.length > reglas.cp_min){
    return true
  }
  else{
    Swal.fire({
      title: 'El campo es vacio'
    })
    return false
  }

}


export function long_max(usuario:string): boolean {
  if(usuario.length <= reglas.cp_max_usr){
    return true
  }
  else{
    Swal.fire({
      title: 'Maximo ' + reglas.cp_max_usr + ' caracteres'
    })
    return false
  }

}


export function regex(usuario:string): boolean {
  if(reglas.regexp.test(usuario)){
    return true
  }
  else{
    Swal.fire({
      title: 'Contiene caracteres invalidos'
    })
    return false
  }

}
