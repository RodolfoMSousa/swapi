import { Component, OnInit } from '@angular/core';
import { NavesService } from '../services/naves.service';
import { LazyLoadEvent } from 'primeng/api';
import { DatasetNave } from '../models/datasetNave';
import { Router } from '@angular/router';
import { Nave } from '../models/nave';

@Component({
  selector: 'app-grid-naves',
  templateUrl: './grid-naves.component.html',
  styleUrls: ['./grid-naves.component.scss']
})
export class GridNavesComponent implements OnInit {

  totalRecords: number;
  loading: boolean;
  datasetNave: DatasetNave;
  selectedRow: Nave;

  constructor(private service: NavesService, private router: Router) { }

  ngOnInit(): void {
    this.datasetNave = new DatasetNave();
    this.totalRecords = 0;
    this.loading = true;
   }

   loadNavesLazy(event: LazyLoadEvent) {
    this.loading = true;
    this.getAllNaves(event.first, event.rows);
  }

  getAllNaves(first: number = 0, rows: number = 10) {
    this.service.getPersonagens(this.getPageParam(first, rows))
      .subscribe(item => {
        this.datasetNave = new DatasetNave(item);
        this.totalRecords = this.datasetNave.quantidade;
        this.loading = false;
      });
  }

  getPageParam(first: number = 0, rows: number = 10) {
    return (first + rows) / rows;
  }

  onRowSelect(event) {
    this.router.navigateByUrl('/naves/detalhes', event.data);
  }
}
