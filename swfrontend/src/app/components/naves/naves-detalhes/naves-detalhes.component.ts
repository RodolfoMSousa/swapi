import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naves-detalhes',
  templateUrl: './naves-detalhes.component.html',
  styleUrls: ['./naves-detalhes.component.scss']
})
export class NavesDetalhesComponent implements OnInit {

  nave: any;

  constructor(private activatedRoute: Router) {
    this.nave = this.activatedRoute.getCurrentNavigation().extras;
   }

  ngOnInit(): void {
  }

}
