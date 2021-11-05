import { Reglas } from "../../models/reglas_campos";
import { usr } from "./contr_f_usr"


let reglas = new Reglas();

let usu = new usr();

  export function contr_usuario(usuario: string): boolean {
    if(usu.long_max(usuario) && usu.long_min(usuario) && usu.regex(usuario) && usu.usr_exist(usuario)){
      return true;
    }
    else{
      return false
    }

  }


