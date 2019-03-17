import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonRoutingModule } from './pokemon.routing';
import { HeaderComponent } from '../shared/header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { TestesComponent } from '../testes/testes.component';


@NgModule({
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginationModule.forRoot()

  ],
  declarations: [
    PokemonHomeComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    TestesComponent
   
  ],
  providers: [
    PokemonService, PokemonListComponent,TestesComponent
  ]
})
export class PokemonModule { }
