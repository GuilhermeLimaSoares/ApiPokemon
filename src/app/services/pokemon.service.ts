// import { PokemonHomeComponent } from './../pokemon/pokemon-home/pokemon-home.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PokemonList } from 'src/app/models/PokemonListModel';
// import { PokemonHomeComponent } from 'src/app/pokemon/pokemon-home/pokemon-home.component';
// import { PokemonListComponent } from '../src/app/pokemon/pokemon-list/PokemonListComponent';
// import { PokemonListComponent } from 'src/app/pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetail } from 'src/app/models/PokemonDetail';

@Injectable({
  providedIn: 'root'
})


export class PokemonService {
  num: number = 22;
  numeriko : number;
  batata : number;
  texto : string ='bom dia';
  kaffe : number;

  constructor(private http: HttpClient) {

    }
      
    trocarPagina(nmk : number){
      //this.batata = nmk * 20;
      this.batata = nmk * 20;
      // return nmk * 20;
      return this.batata;
    }

  getPokemonsList(ceara : any): Observable<PokemonList> {
    // return this.http.get<PokemonList>(`${environment.url}/pokemon`);
    // return this.http.get<PokemonList>(`${environment.url}/pokemon/?offset=20&limit=50`);
     this.numeriko = (ceara * 20) - 20;
    //this.kaffe = Number(this.numeriko);
    // return this.http.get<PokemonList>(`${environment.url}/pokemon/?offset=20&limit=20`);
    return this.http.get<PokemonList>(`${environment.url}/pokemon/?offset=${this.numeriko}&limit=20`);
  }

  getPokemonDetails(url: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(url);
  }

}
