import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http"
import { URLPokemon, SearchResponse } from '../interfaces/pokemons.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private urlPersonajes:URLPokemon[] = [{
    name:"hola",
    url:""
  }];

  private URL:string ="https://pokeapi.co/api/v2/pokemon/";
  constructor(private http:HttpClient) {
    this.consultPersonaje();
   }


  get url() : URLPokemon[]{
    return this.urlPersonajes;
  }

  consultPersonaje(){
    const params = new HttpParams()
    .set("limit","30")

    this.http.get<SearchResponse>(this.URL,{params}).subscribe(response =>{
      this.urlPersonajes = response.results;
      console.log({urlPersonajes:this.urlPersonajes})
    })
  }

  consultPokemon(name:string){


    this.http.get(`${this.URL}+${name}`).subscribe(response =>{
      this.urlPersonajes = ;
      console.log({urlPersonajes:this.urlPersonajes})
    })
  }



}
