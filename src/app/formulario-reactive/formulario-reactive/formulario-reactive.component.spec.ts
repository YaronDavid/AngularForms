import { FormBuilder } from '@angular/forms';
import { FormularioReactiveComponent } from './formulario-reactive.component';

describe('FormularioReactiveComponent', () => {
  let component: FormularioReactiveComponent;


  beforeEach(async () => {
    component = new FormularioReactiveComponent(new FormBuilder())
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deberia crear un formulario con 3 campos, proyecto, horas y tecnologias', () => {

    const formulario = component.miFormulario

    const proyecto = formulario.get("proyecto")
    const horas = formulario.get("horas")
    const tecnologias = formulario.get("tecnologias")

    expect(proyecto).toBeTruthy();
    expect(horas).toBeTruthy();
    expect(tecnologias).toBeTruthy();
  });
  it("deberia verificar que el campo proyecto acepte minimo 3 letras", ()=>{
    const formulario = component.miFormulario

    const proyecto = formulario.get("proyecto")
    proyecto?.setValue("abc")

    expect(proyecto?.valid).toBeTruthy();
  })

  it("deberia verificar que el campo proyecto acepte maximo 30 letras", ()=>{
    const formulario = component.miFormulario

    const proyecto = formulario.get("proyecto")
    proyecto?.setValue("abccmzbxmbcjhabtsresds")

    expect(proyecto?.valid).toBeTruthy();
  })
  it("deberia verificar que el campo horas", ()=>{
    const formulario = component.miFormulario

    const horas = formulario.get("horas")

    expect(horas?.valid).toBeTruthy();
  })

  it("deberia verificar que el campo horas", ()=>{
    const formulario = component.miFormulario

    const horas = formulario.get("horas")
    horas?.setValue(0)

    expect(horas?.valid).toBeTruthy();
  })
  it("deberia verificar que el campo horas invalido", ()=>{
    const formulario = component.miFormulario

    const horas = formulario.get("horas")
    horas?.setValue(200)

    expect(horas?.invalid).toBeTruthy();
  })

  it("deberia verificar que el campo horas invalido", ()=>{
    const tecnologia = component.tecnologia
    const tecnologias = component.tecnologias

    tecnologia.setValue("node")
    component.agregarTec();
    expect(tecnologias.length).toBe(1)
    expect(tecnologias?.value).toEqual(['node'])
  })

});
