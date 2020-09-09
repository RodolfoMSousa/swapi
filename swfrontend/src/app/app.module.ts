import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';
import { PersonagensModule } from './components/personagens/personagens.module';
import { NavesModule } from './components/naves/naves.module';
import { PlanetasModule } from './components/planetas/planetas.module';
import { FeaturesComponent } from './components/features/features.component';
import { FeaturesModule } from './components/features/features.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    FeaturesModule,
    PersonagensModule,
    NavesModule,
    PlanetasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
