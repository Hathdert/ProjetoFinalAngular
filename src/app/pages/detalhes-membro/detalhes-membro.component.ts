import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Membro } from '../../models/membro.model';
import { MembroService } from '../../services/membro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-membro',
  templateUrl: './detalhes-membro.component.html',
  styleUrls: ['./detalhes-membro.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class MembroDetalhesComponent implements OnInit {
  membro?: Membro;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private membroService: MembroService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (!idParam) {
      this.router.navigate(['/']);
      return;
    }
    const id = +idParam;
    const membroEncontrado = this.membroService.getPorId(id);
    if (membroEncontrado) {
      this.membro = membroEncontrado;
    } else {
      alert('Membro não encontrado');
      this.router.navigate(['/']);
    }
  }
}
