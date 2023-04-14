import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormularioReactiveComponent } from './formulario-reactive/formulario-reactive/formulario-reactive.component';
import { FomularioTemplateComponent } from './fomulario-template/fomulario-template/fomulario-template.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FormularioReactiveComponent,
        FomularioTemplateComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
