import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridNavesComponent } from './grid-naves/grid-naves.component';
import { TableModule } from 'primeng/table';
import { NavesDetalhesComponent } from './naves-detalhes/naves-detalhes.component';



@NgModule({
  declarations: [GridNavesComponent, NavesDetalhesComponent],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class NavesModule { }
