import { UsuarioModel } from './usuario';
export interface CartaoModel {
  id: number;
  numeroCartao: number;
  nome: string;
  status: boolean;
  tipoCartao: string;
  usuario: UsuarioModel;
}
