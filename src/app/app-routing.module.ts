import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pokemon', loadChildren: 'src/app/pokemon/pokemon.module#PokemonModule' },
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
