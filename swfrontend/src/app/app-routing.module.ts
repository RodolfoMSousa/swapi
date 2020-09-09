import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridPersonagensComponent } from './components/personagens/grid-personagens/grid-personagens.component';
import { GridNavesComponent } from './components/naves/grid-naves/grid-naves.component';
import { GridPlanetasComponent } from './components/planetas/grid-planetas/grid-planetas.component';
import { DetalhesPersonagemComponent } from './components/personagens/detalhes-personagem/detalhes-personagem.component';
import { DetalhesPlanetasComponent } from './components/planetas/detalhes-planetas/detalhes-planetas.component';
import { NavesDetalhesComponent } from './components/naves/naves-detalhes/naves-detalhes.component';
import { FeaturesComponent } from './components/features/features.component';

const routes: Routes = [
  {path: '', redirectTo: 'features', pathMatch: 'full'},
  {path: 'features', component: FeaturesComponent},
  {path: 'personagens', component: GridPersonagensComponent},
  {path: 'personagens/detalhes', component: DetalhesPersonagemComponent},
  {path: 'naves', component: GridNavesComponent},
  {path: 'naves/detalhes', component: NavesDetalhesComponent},
  {path: 'planetas', component: GridPlanetasComponent},
  {path: 'planetas/detalhes', component: DetalhesPlanetasComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
