import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personagem } from '../models/personagem';

@Component({
  selector: 'app-detalhes-personagem',
  templateUrl: './detalhes-personagem.component.html',
  styleUrls: ['./detalhes-personagem.component.scss']
})
export class DetalhesPersonagemComponent implements OnInit {

  personagem: any;

  constructor(private activatedRoute: Router) {
    this.personagem = this.activatedRoute.getCurrentNavigation().extras;
  }

  ngOnInit(): void {
  }

}
