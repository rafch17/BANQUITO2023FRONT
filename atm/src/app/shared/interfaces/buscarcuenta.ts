export interface BuscarCuenta {
    codCuenta: number,
    numeroCuenta: number,
    codTipoCuenta: string,
    codCliente: number,
    saldoContable: number,
    saldoDisponible: number,
    estado: string,
    fechaCreacion: any,
    fechaUltimoCambio: any,
    version: number
}