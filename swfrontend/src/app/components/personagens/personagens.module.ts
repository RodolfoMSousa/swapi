import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridPersonagensComponent } from './grid-personagens/grid-personagens.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { DetalhesPersonagemComponent } from './detalhes-personagem/detalhes-personagem.component';

@NgModule({
  declarations: [GridPersonagensComponent, DetalhesPersonagemComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ]
})
export class PersonagensModule { }
