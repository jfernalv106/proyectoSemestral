import { TipoUsuarioModel } from "./TipoUsuarioModel";
import { VehiculoModel } from "./VehiculoModel";

export interface UsuarioModel {

    id: number;
    nombre: string;
    apellido: string;
    mail: string;
    nombre_usuario: string;
    pass: string;
    tipo_usuario: number;
    vehiculo: VehiculoModel;
}
