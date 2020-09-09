import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Features', routerLink:'features'},
      {label: 'Personagens', routerLink:'personagens'},
      {label: 'Naves', routerLink:'naves'},
      {label: 'Planetas', routerLink:'planetas'}
    ];
  }

}
