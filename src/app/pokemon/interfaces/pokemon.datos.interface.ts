import { Stat } from "./pokemon.interface";

export interface Pokemon{
  id:number,
  name:string,
  image?:string,
  stats:Stat[]
  color:string


}


export interface Backgroud{
  id:number,
  name:string,
}



