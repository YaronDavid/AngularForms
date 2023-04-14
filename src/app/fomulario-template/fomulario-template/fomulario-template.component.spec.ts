import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioTemplateComponent } from './fomulario-template.component';

describe('FomularioTemplateComponent', () => {
  let component: FomularioTemplateComponent;
  let fixture: ComponentFixture<FomularioTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomularioTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomularioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
