import { Component, OnInit, Input, OnChanges, Output, EventEmitter, Injectable } from '@angular/core';
import { List } from '../../models/ListModel';
// import { getOrCreateChangeDetectorRef } from '@angular/core/src/render3/di';
// import { getSetGlobalLocale } from 'ngx-bootstrap';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class PokemonListComponent implements OnInit, OnChanges {

  @Input()
   totalItems : number = 0;

  @Input()
  bigTotalItems : number;
  
  @Input()
  paginaAtual3: number;

  pageAtualx : number;

  @Output()
  paginaAtual = new EventEmitter<number>();

  @Input()
  pokemonsList: Array<List>;

  @Output()
  detailUrl: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  atualPaginax : number;

  constructor() { }

  ngOnInit() {
    console.log(this.pokemonsList);
  }

  ngOnChanges() {
    console.log(this.pokemonsList);
   // console.log(this.bigCurrentPage);
  }

  getPokemonDetail(url: string): void {
    this.detailUrl.emit(url);
  }

  maxSize = 5;
  // bigTotalItems = 175;
  bigCurrentPage = 1;

  numerico: number;

    //  getNumeroPagina(){
    //   this.numerico = this.bigCurrentPage;
    //   this.atualPaginax = this.numerico;
    //   this.numerico = this.numerico ;
    //  this.paginaAtual.emit({novoValor:this.numerico});
    //  // console.log(this.paginaAtual);
    //    alert(this.numerico);
    // }

    getNumeroPagina($event){
      //console.log($event);

     this.paginaAtual.emit($event.page);
     //  console.log(this.paginaAtual);
    }
}

