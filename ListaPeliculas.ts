import { Pelicula } from './Pelicula';

export class ListaPeliculas {
  private static _instance: ListaPeliculas;
  private _peliculas: Pelicula[] = [];

  private constructor() {}

  static getInstance(): ListaPeliculas {
    if (!ListaPeliculas._instance) {
      ListaPeliculas._instance = new ListaPeliculas();
    }
    return ListaPeliculas._instance;
  }

  agregarPelicula(pelicula: Pelicula) {
    this._peliculas.push(pelicula);
    
  }

  obtenerPeliculas(): Pelicula[] {
    return this._peliculas;
  }
}