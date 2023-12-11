import { Pelicula } from "./Pelicula";

export interface Observer {
    update(pelicula: Pelicula): void;
  }
  
  export class Observable {
    private observers: Observer[] = [];
  
    
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  

    removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
   
    notify(pelicula: Pelicula): void {
      this.observers.forEach((observer) => {
        observer.update(pelicula);
      });
    }
  }