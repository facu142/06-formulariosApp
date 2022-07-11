import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];

}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego : string = '';


  persona: Persona = {
    nombre: 'Facundo',
    favoritos: [
      { id: 1, nombre: 'Metal gear' },
      { id: 1, nombre: 'Minecraft' },
    ]
  }

  agregarJuego(){
    const nuevoFavorito : Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito} );
    this.nuevoJuego = '';

  }


  guardar() {
    console.log('Formulario Posteado');
    console.log(this.miFormulario);

  }

  eliminar(index: number): void {
    this.persona.favoritos.splice(index,1)
  }
}
