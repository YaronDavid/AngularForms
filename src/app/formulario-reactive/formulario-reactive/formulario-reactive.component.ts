import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent {

  tecnologia: FormControl = this.fb.control("hola", [
    Validators.required, Validators.minLength(3), Validators.maxLength(20)
  ])
  
  miFormulario:FormGroup = this.fb.group({
    proyecto: this.fb.control("hola desde reactive form", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    horas: this.fb.control(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(20)
    ]),
    tecnologias: this.fb.array([])
  })

  proyectos: any[] = []

  get tecnologias(){
    return this.miFormulario.get("tecnologias") as FormArray
  }

  validar(){
    return this.miFormulario.invalid && this.miFormulario.touched;
  }

  constructor(private fb: FormBuilder){}

  agregarTec(){
    if(this.tecnologia.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }

    this.tecnologias.push(this.fb.control(this.tecnologia.value));
    this.tecnologia.reset()
  }

  agregarProyecto(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    this.proyectos.push(this.miFormulario.value)

    this.tecnologias.reset(),
    this.tecnologias.clear();
  }
}
