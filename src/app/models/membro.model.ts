// Modelo de dados - Estrutura que define os dados dos membros

export interface Membro {
  id: number;
  nome: string;
  especie: string;                  
  funcao: string;
  estado: string;                   
  dataNascimentoCriacao: string;   
  setorDepartamento: string;
  contactosEmergencia: string;
  notasObservacoes: string;
}
