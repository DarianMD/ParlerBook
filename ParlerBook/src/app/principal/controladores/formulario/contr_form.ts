import { Reglas } from "../../models/reglas_campos";
import { long_max, long_min,regex } from "./contr_f_usr"

let reglas = new Reglas();


  export function contr_usuario(usuario: string): boolean {
    if(long_max(usuario) && long_min(usuario) && regex(usuario)){
      return true;
    }
    else{
      return false
    }

  }


