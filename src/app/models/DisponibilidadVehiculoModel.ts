import { VehiculoModel } from "./VehiculoModel";

export interface DisponibilidadVehiculoModel {

    id: number;
    vehiculo: VehiculoModel;
    asientos_disponibles: number;
    disponibilidad: string;

}