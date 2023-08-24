import { NgModule } from "@angular/core";
import { CardListComponent } from './components/card-list/card-list.component';
import { PokemonPagesComponent } from './pages/pokemon-pages/pokemon.pages.component';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    CardListComponent,
    PokemonPagesComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    CardListComponent,
    PokemonPagesComponent
  ]
})
export class PokemoModule{


}
