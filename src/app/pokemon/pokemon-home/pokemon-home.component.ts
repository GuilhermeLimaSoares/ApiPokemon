import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonList } from './../../models/PokemonListModel';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { List } from '../../models/ListModel';
// import { PokemonService } from '../../services/pokemon.service';
// import { PokemonList } from '../../models/PokemonListModel';
import { PokemonDetail } from '../../models/PokemonDetail';
//import { analyzeAndValidateNgModules } from '@angular/compiler';
//import { t } from '@angular/core/src/render3';


@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})

@Injectable()
  export class PokemonHomeComponent implements OnInit {

   count : number;

  @Output()
  numero = new EventEmitter() ;

  @Output()
  bigTotalItems2 : number;

   @Output()
   bigTotalItems3 = new EventEmitter();

   @Output()
   paginaAtual2 : number;



 @Input()
 paginaAtualX : number;

  x : any;
  @Output()
  pokemonsList: Array<List> = new Array<List>();

  @Output()
  pokemonDetail: PokemonDetail;

  paginaNumber : number;

  bahia : number;

  num : number;
  @Input()
  changePage :  number;

   aNumber : number;

  constructor(private pokemonService: PokemonService) {
   
   }
     
  ngOnInit() {
    this.getPokemonsList();
  
  }

   onMudouPagina(evento : any){
     this.paginaAtual2 = evento;
    //  this.bahia = Number (evento.novoValor);
    this.paginaNumber = this.bahia;
  //console.log(this.paginaAtual2);
   console.log(evento);
  this.getPokemonsList();
      return this.paginaAtual2;
   // return evento.novoValor;
  
   }

  getPokemonsList(): void {
   // console.log(this.paginaAtual2);
    this.pokemonService.getPokemonsList(this.paginaAtual2).subscribe(
      (value: PokemonList) => {
        this.pokemonsList = value.results;
    
       // console.log(value.count);

         this.bigTotalItems2 = value.count;
          //console.log(this.paginaAtual2);
      }
      
    );
  
  }
  
  getPokemonDetail(url: string) {
    this.pokemonService.getPokemonDetails(url).subscribe(
      (value: PokemonDetail) => {
        this.pokemonDetail = value;
        // this.paginaNumber = this.paginaAtual2;
        
      }
    );
  } 

}
