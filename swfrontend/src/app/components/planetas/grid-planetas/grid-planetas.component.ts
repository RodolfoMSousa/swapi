import { Component, OnInit } from '@angular/core';
import { DatasetPlaneta } from '../models/datasetPlaneta';
import { PlanetaService } from '../services/planeta.service';
import { LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';
import { Planeta } from '../models/planeta';

@Component({
  selector: 'app-grid-planetas',
  templateUrl: './grid-planetas.component.html',
  styleUrls: ['./grid-planetas.component.scss']
})
export class GridPlanetasComponent implements OnInit {

  totalRecords: number;
  loading: boolean;
  datasetPlaneta: DatasetPlaneta;
  selectedRow: Planeta;

  constructor(private service: PlanetaService, private router: Router) { }

  ngOnInit(): void {
    this.datasetPlaneta = new DatasetPlaneta();
    this.totalRecords = 0;
    this.loading = true;
   }

   loadPlanetasLazy(event: LazyLoadEvent) {
    this.loading = true;
    this.getAllplanetas(event.first, event.rows);
  }

  getAllplanetas(first: number = 0, rows: number = 10) {
    this.service.getPersonagens(this.getPageParam(first, rows))
      .subscribe(item => {
        this.datasetPlaneta = new DatasetPlaneta(item);
        this.totalRecords = this.datasetPlaneta.quantidade;
        this.loading = false;
      });
  }

  getPageParam(first: number = 0, rows: number = 10) {
    return (first + rows) / rows;
  }

  onRowSelect(event) {
    this.router.navigateByUrl('/planetas/detalhes', event.data);
  }
}
