export interface Factura {
    id?: number;
    idUsuario: number;
    idCurso: number;
    curso: string;
    monto: number;
    fechaEmision: number;
    estado: string;
}