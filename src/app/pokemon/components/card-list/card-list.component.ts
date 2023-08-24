import { Component,Input } from '@angular/core';
import { PokemonService } from '../../servicios/pokemon.service';
import { URLPokemon } from '../../interfaces/pokemons.interface';

@Component({
  selector: 'pokemon-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  constructor(){

  }

  @Input()
  public urlPersonajes: URLPokemon[]=[];





}
