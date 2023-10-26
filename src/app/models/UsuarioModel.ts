
export interface UsuarioModel {

    id?: number;
    nombre?: string;
    apellido?: string;
    mail?: string;
    nombre_usuario?: string;
    pass?: string;
    tipo_usuario?: number;
}

//Metodo dentro de la clase para crear usuario. EJEMPLO solamente.
// static crearUsuario(event: {
//     nombre: string,
//     apellido: string,
//     mail: string
// }){
//     return {
//         nombre: event.nombre,
//         apellido: event.apellido,
//         mail: event.mail
//     }
// }