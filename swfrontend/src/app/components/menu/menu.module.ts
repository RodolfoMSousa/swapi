import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TabMenuModule} from 'primeng/tabmenu';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports: [
    MenuComponent
  ]

})
export class MenuModule { }
