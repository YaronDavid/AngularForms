import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FomularioTemplateComponent } from './fomulario-template/fomulario-template.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FomularioTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FomularioTemplateComponent
  ]
})
export class FomularioTemplateModule { }
