import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroDetalhesComponent } from './detalhes-membro.component';

describe('DetalhesMembroComponent', () => {
  let component: MembroDetalhesComponent;
  let fixture: ComponentFixture<MembroDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembroDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembroDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
