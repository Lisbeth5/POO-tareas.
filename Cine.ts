import { Pelicula } from './Pelicula';
import { Sala } from './Sala';
import { Observable, Observer } from './Observer';
import { Cliente } from './Cliente'; 

export class Cine implements Observer {
  private _peliculas: Pelicula[];
  private _salas: Sala[];
  private _clientes: Cliente[]; 

  constructor(peliculas: Pelicula[]) {
    this._peliculas = peliculas;
    this._salas = this.inicializarSalas();
    this._clientes = []; 
  }

  private inicializarSalas(): Sala[] {
    const salas: Sala[] = [];
    this._peliculas.forEach((pelicula, index) => {
      const sala = new Sala(index + 1, 50); 
      salas.push(sala);
    });
    return salas;
  }

  update(pelicula: Pelicula) {
    console.log(`La película ${pelicula.nombre} ha sufrido un cambio de estado.`);
  }

  registrarCliente(cliente: Cliente) {
    this._clientes.push(cliente); 
  }
}

