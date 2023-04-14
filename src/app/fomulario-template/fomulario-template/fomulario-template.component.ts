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

  tecnologias:string[] = []

  initialState = {
    proyecto: "primero",
    horas: 0,
    tecnologia: "lo que sea bueno"
  }

  proyectos:any[] = []

  agregar(){
    if(this.miFormulario.invalid){
      return;
    }
    this.proyectos.push({
      proyecto: this.miFormulario.controls["proyecto"].value,
      horas: this.miFormulario.controls["horas"].value,
      tecnologias : this.tecnologias
    });

    this.miFormulario.resetForm()
    this.tecnologias = []

    console.log(this.proyectos);

  }

  agregarTec(){

    if(this.miFormulario.controls["tecnologia"].invalid){
      return;
    }


    this.tecnologias.push(this.miFormulario.controls["tecnologia"].value);

    this.miFormulario.resetForm({
      ...this.miFormulario.value,
      tecnologia: ""
    })

  }

}
