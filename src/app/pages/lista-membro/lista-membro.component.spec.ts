import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosListaComponent } from './lista-membro.component';

describe('ListaMembroComponent', () => {
  let component: MembrosListaComponent;
  let fixture: ComponentFixture<MembrosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembrosListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembrosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
