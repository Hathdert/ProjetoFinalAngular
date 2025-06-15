import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroFormularioComponent } from './formulario-membro.component';

describe('FormularioMembroComponent', () => {
  let component: MembroFormularioComponent;
  let fixture: ComponentFixture<MembroFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembroFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
