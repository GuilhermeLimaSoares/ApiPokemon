import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PokemonDetail } from '../../models/PokemonDetail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnChanges {

  @Input()
  pokemonDetail: PokemonDetail;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    //console.log(this.pokemonDetail);
  }

}
