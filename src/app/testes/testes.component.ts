import { PokemonService } from '../services/pokemon.service';
import { Component, OnInit, Injectable } from '@angular/core';
// import { PokemonServicet } from '../pokemon/service/pokemon.PokemonService';
@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class TestesComponent implements OnInit {

  peixe : string;
  constructor(private pokemonService : PokemonService) { }

  // getNumeroPagina(){
  //   // console.log(this.pokemonService.batata);
  //   // return this.pokemonService.batata;
  //    console.log(this.pokemonService.num);
  //    this.peixe = this.pokemonService.batata;
  //    console.log(this.peixe);
  // }

  ngOnInit() {
  }

  oioioi(){
     this.peixe = this.pokemonService.texto;
    // console.log(this.pokemonService.oioioi);
    console.log(this.peixe);
  }

}
