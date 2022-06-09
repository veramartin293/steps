import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuInformacionComponent } from './components/tu-informacion/tu-informacion.component';
import { StepProgressComponent } from './components/step-progress/step-progress.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { EscolaridadComponent } from './components/escolaridad/escolaridad.component';
import { InteresesComponent } from './components/intereses/intereses.component';

@NgModule({
  declarations: [
    AppComponent,
    TuInformacionComponent,
    StepProgressComponent,
    DatosPersonalesComponent,
    EscolaridadComponent,
    InteresesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
