import { Component, Renderer2, ViewChild, ComponentFactoryResolver, AfterContentInit, AfterViewInit, ViewContainerRef, OnInit } from '@angular/core';
import { PokemonService } from '../../servicios/pokemon.service';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { DinamicComponentDirective } from '../../directives/dinamic-component.directive';
import { Pokemon } from '../../interfaces/pokemon.datos.interface';

@Component({
  selector: 'pokemon-pages',
  templateUrl: './pokemon.pages.component.html',
  styleUrls:["./pokemon.pages.component.css"]
})


export class PokemonPagesComponent implements OnInit{

  informationPokemon:Pokemon[]=[];


  constructor(private pokemonsService: PokemonService){  }


  ngOnInit(): void {
    this.pokemonsService.datosDisponibles().subscribe(res=>{
      this.informationPokemon=res;
    })
  }
  

  get getInfotmation(){

    return this.informationPokemon
  }

  next(){
    this.informationPokemon=[];
    this.pokemonsService.getPokemons();

    this.pokemonsService.datosDisponibles().subscribe(res=>{
      this.informationPokemon=res;
      
    })
  
  }

  backspace(){
    this.informationPokemon=[];
    this.pokemonsService.backspace();

    this.pokemonsService.datosDisponibles().subscribe(res=>{
      this.informationPokemon=res;      
    })
  }



}
