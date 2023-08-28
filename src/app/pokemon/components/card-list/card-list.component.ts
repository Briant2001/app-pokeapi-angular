import { Component,Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PokemonService } from '../../servicios/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.datos.interface';
import { Stat } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public urlPersonajes :Pokemon[]=[];
  public personaje:Stat[]=[];
  public img!:string
  public namee!:string

  @ViewChild('name') nombre!:ElementRef<HTMLElement>
  
  public bool:boolean=false;

  constructor(private pokemonService: PokemonService,){}
  verGrafica(id:number,img:string){

    this.namee=this.urlPersonajes[id-1].name;
    this.img=img;
    this.personaje=this.urlPersonajes[id].stats;
    console.log(this.personaje);
    this.bool=true;
  }
  cerrar(){
    this.bool=false;
  }

}
