import { Reglas } from "../../../../usuario-registro/models/reglas_campos";
import Swal from "sweetalert2"

let reglas = new Reglas();


export class edad{
  constructor(){

  }

  long_min(edad:number): boolean {
    let edad_string = String(edad);
    if(edad_string.length > reglas.cp_min){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: edad + 'Edad: El campo es vacio'
      })
      return false
    }

  }

  long_max(edad:number): boolean {
    if(edad <= reglas.cp_max_edad){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: edad,
        text: 'Edad: Maximo ' + reglas.cp_max_edad + ' caracteres'
      })
      return false
    }

  }

  cp_num_minus(edad:number): boolean {
    if(edad >= 0){
      return true
    }
    else{
      Swal.fire({
        icon: 'error',
        title: edad,
        text: 'Edad: No puedes introducir numeros negativos'
      })
      return false
    }

  }

}
