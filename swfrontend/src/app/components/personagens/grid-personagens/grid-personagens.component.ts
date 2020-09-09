import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { PersonagemService } from '../services/personagem.service';
import { DatasetPersonagem } from '../models/datasetPersonagem';
import { Personagem } from '../models/personagem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagens',
  templateUrl: './grid-personagens.component.html',
  styleUrls: ['./grid-personagens.component.scss']
})
export class GridPersonagensComponent implements OnInit {

  totalRecords: number;
  loading: boolean;
  datasetPersonagem: DatasetPersonagem;
  selectedPersonagem: Personagem;

  constructor(private service: PersonagemService, private router: Router) { }
  
  ngOnInit(): void {
    this.datasetPersonagem = new DatasetPersonagem();
    this.totalRecords = 0;
    this.loading = true;
   }

  loadPersonagensLazy(event: LazyLoadEvent) {
    this.loading = true;
    this.getAllpersonagens(event.first, event.rows);
  }

  getAllpersonagens(first: number = 0, rows: number = 10) {
    this.service.getPersonagens(this.getPageParam(first, rows))
      .subscribe(item => {
        this.datasetPersonagem = new DatasetPersonagem(item);
        this.totalRecords = this.datasetPersonagem.quantidade;
        this.loading = false;
      });
  }

  getPageParam(first: number = 0, rows: number = 10) {
    return (first + rows) / rows;
  }

  onRowSelect(event) {
    this.router.navigateByUrl('/personagens/detalhes', event.data);
  }

}
