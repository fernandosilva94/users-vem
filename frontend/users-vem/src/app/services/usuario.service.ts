import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiServerUrl = "http://localhost:8080/api/usuario";

  constructor(private http: HttpClient) { }

  public getUsuario(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${this.apiServerUrl}`);
  }

  public addUsuario(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.apiServerUrl}`, usuario);
  }

  // public updateUsuario(usuario: Usuario): Observable<Usuario> {
  //   return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`, usuario);
  // }

  // public deleteUsuario(usuarioId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/usuario/delete/${usuarioId}`);
  // }
}
