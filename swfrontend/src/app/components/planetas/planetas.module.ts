import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridPlanetasComponent } from './grid-planetas/grid-planetas.component';
import { TableModule } from 'primeng/table';
import { DetalhesPlanetasComponent } from './detalhes-planetas/detalhes-planetas.component';



@NgModule({
  declarations: [GridPlanetasComponent, DetalhesPlanetasComponent],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class PlanetasModule { }
