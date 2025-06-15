import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Membro } from '../../models/membro.model';
import { MembroService } from '../../services/membro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-membro',
  templateUrl: './lista-membro.component.html',
  styleUrls: ['./lista-membro.component.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MembrosListaComponent {
  membros: Membro[] = [];

  constructor(private membroService: MembroService, private router: Router) {
    this.membros = this.membroService.getTodos();
  }

  eliminar(id: number) {
    if (confirm('Tem certeza que deseja eliminar este membro?')) {
      this.membroService.eliminar(id);
      this.membros = this.membroService.getTodos();
    }
  }

  getEstiloEstado(estado: string) {
    
    switch (estado) {
      case 'Ativo': 
        return { backgroundColor: '#c8e6c9', color: '#2e7d32' };
      case 'Em Missão': 
        return { backgroundColor: '#bbdefb', color: '#0d47a1' };
      case 'De Férias': 
        return { backgroundColor: '#ffe0b2', color: '#e65100' };
      case 'Em Descanso': 
        return { backgroundColor: '#e1bee7', color: '#6a1b9a' };
      default: 
        return {};
    }
  }

  
}
