import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';

const routes: Routes = [
    { path: '', component: PokemonHomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}
