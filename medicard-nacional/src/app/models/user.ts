export class User {
    id: string;
    ci: string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: Date;
    sexo: string;
    telefono: string;
    ciudad: string;
    codigo: string;
    fecha_activacion: Date;
    userName: string;
    password: string;
    diasRestantes: string;
    
    constructor(diasRestantes:string, id: string, ci: string, nombres: string, apellidos: string, fecha_nacimiento: Date, sexo: string, telefono: string, ciudad: string,  codigo: string, fecha_activacion: Date, userName: string, password: string,){
        this.id = id;
        this.ci = ci;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fecha_nacimiento = fecha_nacimiento;
        this.sexo = sexo;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.codigo = codigo;
        this.fecha_activacion = fecha_activacion;
        this.userName = userName;
        this.password = password;
        this.diasRestantes = diasRestantes;
    }
}
export interface ActivateUser {
    id: string; // Supongo que ya tienes esta propiedad en tu modelo
    //fecha_activacion: string; // Agrega la propiedad fecha_activacion con el tipo de dato adecuado
    // Otras propiedades que puedan ser necesarias para la activación
  }