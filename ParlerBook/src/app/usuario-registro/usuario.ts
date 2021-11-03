export class Usuario{
  usuario: string;
  nombre: string;
  apellido: string;
  edad: number;
  sexo: string;
  descripcion: string;
  correo: string;
  contraseña: string;


  constructor(usuario: string, nombre: string, apellido:string, edad: number, sexo: string, descripcion:string, correo: string, contraseña:string){
    this.usuario = usuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
    this.descripcion = descripcion;
    this.correo = correo;
    this.contraseña = contraseña
  }
}
