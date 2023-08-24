import { Component } from '@angular/core';
import { PokemonService } from '../../servicios/pokemon.service';
import { URLPokemon } from '../../interfaces/pokemons.interface';

@Component({
  selector: 'pokemon-pages',
  templateUrl: './pokemon.pages.component.html',
})
export class PokemonPagesComponent {

  constructor(private pokemonsService: PokemonService){

  }

  get urlPokemon():URLPokemon[]{
    return this.pokemonsService.url;
  }


}
