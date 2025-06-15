import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MembroService } from '../../services/membro.service';

@Component({
  selector: 'app-formulario-membro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-membro.component.html',
  styleUrls: ['./formulario-membro.component.scss']
})
export class MembroFormularioComponent implements OnInit {
  form!: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private membroService: MembroService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      especie: ['', Validators.required],
      funcao: ['', Validators.required],
      estado: ['Ativo', Validators.required],
      dataNascimentoCriacao: [''],
      setorDepartamento: [''],
      contactosEmergencia: [''],
      notasObservacoes: ['']
    });

    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = +paramId;
      const membro = this.membroService.getPorId(this.id);
      if (membro) this.form.patchValue(membro);
    }
  }

  submit() {
    if (this.form.valid) {
      if (this.id !== null) {
        this.membroService.atualizar(this.id, this.form.value);
        alert('Membro atualizado com sucesso!');
      } else {
        this.membroService.adicionar(this.form.value);
        alert('Membro criado com sucesso!');
      }
      this.router.navigate(['/']);
    } else {
      alert('Por favor, preencha os campos obrigatórios.');
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
