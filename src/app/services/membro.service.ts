import { Injectable } from '@angular/core';
import { Membro } from '../models/membro.model';

@Injectable({ providedIn: 'root' })
export class MembroService {

  //Estrutura de dados responsável por armazenar os dados dos membros ( Em memória )
  private membros: Membro[] = [
    {
      //Dados de exemplo do ficheiro Dados.ts do Teams da disciplina
      id: 1,
      nome: 'Capitão Valerius',
      especie: 'Humano 🧑',
      funcao: 'Capitão',
      estado: 'Ativo',
      dataNascimentoCriacao: '2075-03-15',
      setorDepartamento: 'Ponte de Comando',
      contactosEmergencia: 'Alferes Silva (Interno)',
      notasObservacoes: 'Líder carismático e estratégico.',
    },
    {
      id: 2,
      nome: 'Zara Xylos',
      especie: 'Grey 👽',
      funcao: 'Navegador',
      estado: 'Em Missão',
      dataNascimentoCriacao: 'Desconhecida',
      setorDepartamento: 'Navegação',
      contactosEmergencia: 'Comando Central (Anonimizado)',
      notasObservacoes: 'Especialista em rotas intergalácticas complexas.',
    },
    {
      id: 3,
      nome: "Dr. K'tharr",
      especie: 'Reptiliano 🦎',
      funcao: 'Médico Chefe',
      estado: 'Ativo',
      dataNascimentoCriacao: '345 Ciclos Estelares',
      setorDepartamento: 'Enfermaria',
      contactosEmergencia: 'Protocolo Médico',
      notasObservacoes: 'Conhecimentos avançados em fisiologia alienígena.',
    },
    {
      id: 4,
      nome: 'Elara Frost',
      especie: 'Nórdico 👱‍♂️',
      funcao: 'Engenheira de Sistemas',
      estado: 'Em Descanso',
      dataNascimentoCriacao: '2102-11-22',
      setorDepartamento: 'Engenharia',
      contactosEmergencia: 'Família Estelar',
      notasObservacoes: 'Mente brilhante na otimização de motores de dobra.',
    },
    {
      id: 5,
      nome: 'Mikael Sol',
      especie: 'Humano 🧑',
      funcao: 'Oficial de Comunicações',
      estado: 'Ativo',
      dataNascimentoCriacao: '2088-07-01',
      setorDepartamento: 'Comunicações',
      contactosEmergencia: 'Base Terra',
      notasObservacoes: 'Fluente em mais de 100 línguas cósmicas.',
    },
    {
      id: 6,
      nome: "Jax R'tharr",
      especie: 'Grey 👽',
      funcao: 'Técnico de Campo',
      estado: 'Em Missão',
      dataNascimentoCriacao: 'Desconhecida',
      setorDepartamento: 'Manutenção Exterior',
      contactosEmergencia: 'Nenhum',
      notasObservacoes: 'Especialista em reparos de emergência no vácuo.',
    },
    {
      id: 7,
      nome: 'Sargento Viss',
      especie: 'Reptiliano 🦎',
      funcao: 'Chefe de Segurança',
      estado: 'Ativo',
      dataNascimentoCriacao: '298 Ciclos Estelares',
      setorDepartamento: 'Segurança',
      contactosEmergencia: 'Protocolo de Defesa',
      notasObservacoes: 'Mestre em combate tático e estratégico.',
    },
    {
      id: 8,
      nome: 'Astrid Lunaris',
      especie: 'Nórdico 👱‍♂️',
      funcao: 'Oficial Científico',
      estado: 'Ativo',
      dataNascimentoCriacao: '2095-04-10',
      setorDepartamento: 'Laboratório de Pesquisa',
      contactosEmergencia: 'Academia Galáctica',
      notasObservacoes: 'Focada em astrofísica e anomalias espaciais.',
    },
  ];

  private nextId = 9;

  // Função para retornar todos os membros armazenados
  getTodos(): Membro[] {
    return this.membros;
  }

  // Função para retornar um membro específico pelo ID
  getPorId(id: number): Membro | undefined {
    return this.membros.find(m => m.id === id);
  }

  // Função para adicionar um novo membro à estrutura de dados
  adicionar(membro: Omit<Membro, 'id'>): void {
    const novoMembro = { ...membro, id: this.nextId++ };
    this.membros.push(novoMembro);
  }

  // Função para atualizar um membro existente na estrutura de dados
  atualizar(id: number, membro: Omit<Membro, 'id'>): void {
    const index = this.membros.findIndex(m => m.id === id);
    if (index !== -1) {
      this.membros[index] = { ...membro, id };
    }
  }

  // Função para eliminar um membro existente na estrutura de dados
  eliminar(id: number): void {
    this.membros = this.membros.filter(m => m.id !== id);
  }
}
