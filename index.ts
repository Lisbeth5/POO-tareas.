
import { Pelicula } from './Pelicula';
import { Sala } from './Sala';
import { Cliente } from './Cliente';
import { ListaPeliculas } from './ListaPeliculas';
import { Cine } from './Cine';
import { ComboComida, Comestible } from './Decorador';

const johnWick = new Pelicula('John Wick');
const aladdin = new Pelicula('Aladdin');
const avengers = new Pelicula('Avengers');
const peliculas = [johnWick, aladdin, avengers];

const listaPeliculas = ListaPeliculas.getInstance();

peliculas.forEach((pelicula) => {
  listaPeliculas.agregarPelicula(pelicula);
});

const cine = new Cine(peliculas);


console.log('Películas disponibles en el cine:');
console.log(listaPeliculas.obtenerPeliculas().map((pelicula) => pelicula.nombre));


const sala1 = new Sala(1, 50); 

const cliente1 = new Cliente(
  'Cliente 1',
  johnWick,
  sala1,
  10,
  ['Palomitas', 'Refresco'],
  ['Hot-dog', 'Gaseosa']
);


cine.registrarCliente(cliente1);


cliente1.mostrarDetalleCliente();

const canguil = new Comestible('Canguil', 5);
const hotDog = new Comestible('Hot-dog', 8);

const combo1 = new ComboComida('Combo Especial');
combo1.agregarProducto(canguil);
combo1.agregarProducto(hotDog);

console.log(`Descripción del combo: ${combo1.descripcion}`);
console.log(`Costo del combo: $${combo1.costo}`);