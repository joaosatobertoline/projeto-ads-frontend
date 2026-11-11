export type TipoCategoria = 'RECEITA' | 'DESPESA';

export interface Categoria {
  id: number;
  descricao: string;
  tipo: TipoCategoria;
  ativa: boolean;
}

export type CategoriaInput = Omit<Categoria, 'id'>;