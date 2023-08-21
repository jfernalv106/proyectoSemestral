export class UserModel {

    constructor(
        public nombre: string,
        public apellido: string,
        public mail: string,
        public tipo: string,
        public usuario: string,
        public pass: string,
    ) {
    }

    //Metodo dentro de la clase para crear usuario. EJEMPLO solamente.
    static crearUsuario(event: {
        nombre: string,
        apellido: string,
        mail: string
    }){
        return {
            nombre: event.nombre,
            apellido: event.apellido,
            mail: event.mail
        }
    }
}