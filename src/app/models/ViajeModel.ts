import { TipoViajeModel } from "./TipoViajeModel";
import { UsuarioModel } from "./UsuarioModel";
import { VehiculoModel } from "./VehiculoModel";

export interface ViajeModel {
    
    id: number;
    precio: number;
    nro_viaje: number;
    calificacion: number;
    comentario: string;
    id_pasajero: UsuarioModel;
    tipo_viaje: TipoViajeModel;
    id_conductor: UsuarioModel;
    id_vehiculo: VehiculoModel;
}