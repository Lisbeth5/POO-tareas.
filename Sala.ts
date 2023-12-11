
export class Sala {
    private _numero: number;
    private _asientosDisponibles: number;
  
    constructor(numero: number, asientosDisponibles: number) {
      this._numero = numero;
      this._asientosDisponibles = asientosDisponibles;
    }
  
    get numero(): number {
      return this._numero;
    }
  
    get asientosDisponibles(): number {
      return this._asientosDisponibles;
    }
  }