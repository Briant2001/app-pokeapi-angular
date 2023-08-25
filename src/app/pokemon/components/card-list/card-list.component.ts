import { Component,Input } from '@angular/core';
import { PokemonService } from '../../servicios/pokemon.service';
import { URLPokemon } from '../../interfaces/pokemons.interface';
import { Pokemon } from '../../interfaces/pokemon.datos.interface';

@Component({
  selector: 'pokemon-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  constructor(private pokemonService: PokemonService){

  }

  @Input()
  public urlPersonajes: Pokemon[]=[];



  verPokemon(){
    this.pokemonService.getPokemones()
    console.log("otraves")
  }
  verPokemons(){
    this.pokemonService.getPokemoness()
    console.log("otraves")
  }




}
