
import { usr } from "./contr_campos/contr_f_usr";
import { nom } from "./contr_campos/contr_f_nom";
import {apell } from "./contr_campos/contr_f_apell";
import {edad} from "./contr_campos/contr_f_edad";


let usu = new usr();
let nomb = new nom();
let ape = new apell();
let eda = new edad();


  export function contr_usuario(usuario: string): boolean {
    if(usu.long_max(usuario) && usu.long_min(usuario) && usu.regex(usuario) && usu.usr_exist(usuario)){
      return true;
    }
    else{
      return false;
    }



  }


  export function contr_nom(nombre: string): boolean{
  if(nomb.long_min(nombre) && nomb.long_max(nombre) && nomb.regex(nombre)){
    return true;
  }
  else{
    return false;
  }
}


export function contr_apell(apellido: string): boolean{
  if(ape.long_min(apellido) && ape.long_max(apellido) && ape.regex(apellido)){
    return true
  }
  else{
    return false
  }

}

export function contr_edad(edad:number):boolean{
  if(eda.long_min(edad) && eda.long_max(edad) && eda.cp_num_minus(edad)){
    return true
  }
  else{
    return false
  }
}

export function contr_foto(nombre:string, apellido: string, foto: string){
  nombre = nombre.substr(0,1);
  apellido = apellido.substr(0,1);

  foto = nombre.concat(apellido);

  return foto

}

