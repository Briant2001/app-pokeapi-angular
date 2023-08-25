import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http"
import { URLPokemon, SearchResponse } from '../interfaces/pokemons.interface';
import { SearchResponsePokemon, Sprites } from '../interfaces/pokemon.interface';
import { Pokemon } from './../interfaces/pokemon.datos.interface';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private URL:string ="https://pokeapi.co/api/v2/pokemon/";
  private informatioPokemon:Pokemon[]=[];
  private information:URLPokemon[]=[];
  private inicio:number = 30;
  private siguiente:number = 0;

  constructor(private http:HttpClient) {
    this.getPokemone();

    // for (let index = 0; index < 60; index++) {
    //   this.getPokemones().pipe( mergeMap((response) =>{

    //     return this.getInformationPokemones(response.results[index].name)

    //   })).subscribe((response)=>{
    //     this.informatioPokemon[index] = {name:response.name,image:response.sprites.other?.['official-artwork'].front_default}
    //   })

    // }

    // console.log(this.informatioPokemon)
  }

  get pokemon(){
    return this.informatioPokemon
  }


  getPokemone(){

    const params = new HttpParams().set("limit",30).set("offset",this.siguiente);

     return this.http.get<SearchResponse>(this.URL,{params}).subscribe(response=>{
      this.informatioPokemon = response.results
      console.log(this.siguiente)
     });


  }
  getPokemones(){
    this.siguiente +=this.inicio

    const params = new HttpParams().set("limit",30).set("offset",this.siguiente);

     return this.http.get<SearchResponse>(this.URL,{params}).subscribe(response=>{
      this.informatioPokemon = response.results
      console.log(this.siguiente)
     });


  }

  getPokemoness(){

    this.siguiente -=this.inicio

    const params = new HttpParams().set("limit",30).set("offset",this.siguiente);

     return this.http.get<SearchResponse>(this.URL,{params}).subscribe(response=>{
      this.informatioPokemon = response.results
      console.log(this.siguiente)
     });


  }

  private getInformationPokemones(name:string){

      return this.http.get<SearchResponsePokemon>(`${this.URL + name}`)

  }




























  // private urlPersonajes:URLPokemon[] = [{
  //   name:"hola",
  //   url:""
  // }];

  // private imagePokemon: Sprites[]=[];

  // private URL:string ="https://pokeapi.co/api/v2/pokemon/";
  // constructor(private http:HttpClient) {
  //   this.consultPersonaje();
  //  }


  // get url() : URLPokemon[]{
  //   return this.urlPersonajes;
  // }
  // get image(){

  //   return this.imagePokemon
  // }

  // consultPersonaje(){
  //   const params = new HttpParams()
  //   .set("limit","30")

  //   this.http.get<SearchResponse>(this.URL,{params}).subscribe(response =>{
  //     this.urlPersonajes = response.results;

  //   })
  // }

  // consultPokemon(url:string){
  //   this.http.get<SearchResponsePokemon>(url).subscribe(response =>{

  //     console.log(response.name);
  //     this.imagePokemon = [response.sprites];
  //     console.log("Imagen :"+this.imagePokemon[0].other?.['official-artwork'].front_default)

  //   })
  // }





}
