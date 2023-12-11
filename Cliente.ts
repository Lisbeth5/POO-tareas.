import { Pelicula } from './Pelicula';
import { Sala } from './Sala';

export class Cliente {
  private nombre: string;
  private peliculaEscogida: Pelicula;
  private sala: Sala;
  private asiento: number;
  private aperitivosGratis: string[];
  private productosComestibles: string[];

  constructor(
    nombre: string,
    peliculaEscogida: Pelicula,
    sala: Sala,
    asiento: number,
    aperitivosGratis: string[],
    productosComestibles: string[]
  ) {
    this.nombre = nombre;
    this.peliculaEscogida = peliculaEscogida;
    this.sala = sala;
    this.asiento = asiento;
    this.aperitivosGratis = aperitivosGratis;
    this.productosComestibles = productosComestibles;
  }

  mostrarDetalleCliente() {
    console.log(`
      Nombre del cliente: ${this.nombre}
      Película escogida: ${this.peliculaEscogida.nombre}
      Sala de cine: ${this.sala.numero}
      Asiento: ${this.asiento}
      Aperitivos gratis: ${this.aperitivosGratis.join(', ')}
      Productos comestibles: ${this.productosComestibles.join(', ')}
    `);
  }
}