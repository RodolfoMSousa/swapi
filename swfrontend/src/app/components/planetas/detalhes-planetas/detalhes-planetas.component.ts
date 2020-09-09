import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-planetas',
  templateUrl: './detalhes-planetas.component.html',
  styleUrls: ['./detalhes-planetas.component.scss']
})
export class DetalhesPlanetasComponent implements OnInit {

  planeta: any;

  constructor(private activatedRoute: Router) {
    this.planeta = this.activatedRoute.getCurrentNavigation().extras;
   }

  ngOnInit(): void {
  }

}
