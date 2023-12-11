
export interface ProductoComestible {
    descripcion: string;
    costo: number;
  }
  
  export class Comestible implements ProductoComestible {
    private _descripcion: string;
    private _costo: number;
  
    constructor(descripcion: string, costo: number) {
        this._descripcion = descripcion;
        this._costo = costo;
    }
  
    get descripcion(): string {
        return this._descripcion;
    }
  
    get costo(): number {
        return this._costo;
    }
  }
  
  export class ComboComida implements ProductoComestible {
    private _productos: ProductoComestible[];
    private _descripcion: string;
  
    constructor(descripcion: string) {
        this._descripcion = descripcion;
        this._productos = [];
    }
  
    agregarProducto(producto: ProductoComestible) {
        this._productos.push(producto);
    }
  
    get descripcion(): string {
        return this._productos.map((producto) => producto.descripcion).join(', ');
    }
  
    get costo(): number {
        return this._productos.reduce((total, producto) => total + producto.costo, 0);
    }
  }
  