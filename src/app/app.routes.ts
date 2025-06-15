import { Routes } from '@angular/router';
import { MembrosListaComponent } from './pages/lista-membro/lista-membro.component';
import { MembroFormularioComponent } from './pages/formulario-membro/formulario-membro.component';
import { MembroDetalhesComponent } from './pages/detalhes-membro/detalhes-membro.component';

export const routes: Routes = [
  { path: '', component: MembrosListaComponent },
  { path: 'novo', component: MembroFormularioComponent },
  { path: 'editar/:id', component: MembroFormularioComponent },
  { path: 'detalhes/:id', component: MembroDetalhesComponent }
];

