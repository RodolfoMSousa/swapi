import { Component, OnInit } from '@angular/core';
import { DatasetNave } from '../naves/models/datasetNave';
import { FeaturesService } from './service/features.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  options: SelectItem[];
  value: string = "autonomia";
  distancia: number = 10;
  totalRecords: number;
  datasetNave: DatasetNave;

  constructor(private service: FeaturesService) { }

  ngOnInit(): void {
    this.datasetNave = new DatasetNave();
    this.totalRecords = 0;
    this.getAllNaves();
    this.options = [{label: 'Calculo Autonomia', value: 'autonomia'}, {label: 'Autonomia/Passageiros', value: 'autPassageiros'}];
  }

  getAllNaves() {
    this.service.getAllNaves()
      .subscribe(item => {
        this.datasetNave = new DatasetNave(item);
        this.totalRecords = this.datasetNave.quantidade;
      });
  }

  calcular() {
    this.datasetNave.naves.forEach(nave=>{
      if(this.distancia && nave.mglt != 'unknown'){
        nave.tempo = this.distancia/+nave.mglt;
      }
    });


  }

}
