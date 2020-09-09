import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { TableModule } from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    TableModule,
    SelectButtonModule,
    InputNumberModule,
    FormsModule,
    ButtonModule
  ]
})
export class FeaturesModule { }
