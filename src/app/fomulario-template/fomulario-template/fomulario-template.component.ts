import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fomulario-template',
  templateUrl: './fomulario-template.component.html',
  styleUrls: ['./fomulario-template.component.css']
})
export class FomularioTemplateComponent {

  @ViewChild("miFormulario")
  miFormulario!:NgForm

  agregar(){
    console.log("Enviado correctamente");
  }
}
