import { Reglas } from "../../models/reglas_campos";
import Swal from "sweetalert2"
import { personaje } from "../../usuario-registro/usuario-registro.component";
import { Usuario } from "../../models/usuario";


let reglas = new Reglas();




export class usr{

    constructor(){

    }

    long_min(usuario:string): boolean {
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


    long_max(usuario:string): boolean {
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


    regex(usuario:string): boolean {
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


  usr_exist(usr:string): boolean{

      if(usr == "paco"){
        return true
      }
      else{
        Swal.fire({
          title: 'El usuario ya existe'
        })
        return false
      }

    }



}
