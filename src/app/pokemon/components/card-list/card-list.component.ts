import { Component,Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PokemonService } from '../../servicios/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.datos.interface';
import { Stat } from '../../interfaces/pokemon.interface';
import { of,forkJoin ,Subject,Observable } from 'rxjs';

@Component({
  selector: 'pokemon-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent{

  @Input()
  public urlPersonajes :Pokemon[]=[];
  public personaje:Stat[]=[];
  public img!:string
  public namee!:string

  public backgroud:string[] = []
  

  @ViewChild('name') nombre!:ElementRef<HTMLElement>

  public bool:boolean=false;

  constructor(private pokemonService: PokemonService,){
    pokemonService.datosDisponibles().subscribe(e=>{
      
      const observables = e.map((results)=>
        pokemonService.verColor(results.id)
        );
        
      forkJoin(observables).subscribe((e)=>{
        console.log(e);
      })

      
    })
    // pokemonService.verColor().subscribe(e=>{
    //   console.log(e.name);
    // })

    //
  }
  verGrafica(id:number,img:string){
    this.namee=this.urlPersonajes[id].name;

    this.img=img;
    this.personaje=this.urlPersonajes[id].stats;
    this.bool=true;
  }
  cerrar(){
    this.bool=false;
  }

}
