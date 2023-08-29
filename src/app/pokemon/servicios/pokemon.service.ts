import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URLPokemon, SearchResponse } from '../interfaces/pokemons.interface';
import {SearchResponsePokemon,} from '../interfaces/pokemon.interface';
import { Backgroud, Pokemon } from './../interfaces/pokemon.datos.interface';

import { of,forkJoin ,Subject,Observable } from 'rxjs';
import { mergeMap  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private URL: string = 'https://pokeapi.co/api/v2/pokemon/';

  private information: Pokemon[] = [];
  private next:number=0;
  private datosSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.getPokemons()
  }

  pokemon(): Pokemon[] {

    return this.information;
  }

  getPokemons() {
    console.log(this.next);
    const params = new HttpParams().set("limit", "30").set("offset", this.next);
    this.http.get<SearchResponse>(this.URL,{params}).subscribe(res=>{
      this.next=this.next+30;
      const observables = res.results.map((results)=>
        this.http.get<SearchResponsePokemon>(results.url)
      );
      forkJoin(observables).subscribe((response)=>{
        
        
        
        this.information.push(
          ...response.map((response) => ({
            id: response.id,
            name: response.name,
            image: response.sprites?.other?.['official-artwork'].front_default,
            stats:response.stats,
            color:""
          })));

        //console.log(this.information);
        this.datosSubject.next(this.information)
        this.information=[];

      })
    })
  }


  backspace(){
    this.next = this.next-60;
    this.getPokemons()
  }

  datosDisponibles():Observable<Pokemon[]> {
    return this.datosSubject.asObservable();
  }

  verColor(name:number){

    return this.http.get<Backgroud>("https://pokeapi.co/api/v2/pokemon-color/"+name)
  }

}
