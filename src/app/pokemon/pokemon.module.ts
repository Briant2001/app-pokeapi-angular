import { NgModule } from "@angular/core";
import { CardListComponent } from './components/card-list/card-list.component';
import { PokemonPagesComponent } from './pages/pokemon-pages/pokemon.pages.component';
import { CommonModule } from "@angular/common";
import { GraficaComponent } from './components/grafica-barras/grafica.component';
import { DinamicComponentDirective } from './directives/dinamic-component.directive';
import { NgChartsModule  } from 'ng2-charts';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations:[
    CardListComponent,
    PokemonPagesComponent,
    GraficaComponent,
    DinamicComponentDirective,
    LazyImageComponent,
  ],
  imports:[
    CommonModule,
    NgChartsModule 
  ],
  exports:[
    CardListComponent,
    PokemonPagesComponent
  ]
})
export class PokemoModule{


}
