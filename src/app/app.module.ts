import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FomularioTemplateModule } from './fomulario-template/fomulario-template.module';
import { FormularioReactiveModule } from './formulario-reactive/formulario-reactive.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FomularioTemplateModule,
    FormularioReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
