export class Reglas{
  cp_min: number = 0;
  cp_max_usr: number = 15;
  cp_max_edad = 99;

  cp_min_desc = 4;
  cp_max_dec = 100;

  cp_min_correo = 5;
  cp_max_correo = 35;

  regex_usr = new RegExp('^[A-Za-z0-9 ]*$');
  regex_nom = new RegExp('^[A-Za-z0-9 ]*$');
  regex_correo = new RegExp('^[A-Za-z0-9@.]*$');


  constructor(){
  }



}
