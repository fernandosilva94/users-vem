import { UsuarioModel } from '../usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiServerUrl = "http://localhost:8080/api/usuario";

  constructor(private http: HttpClient) { }

  public getUsuario(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${this.apiServerUrl}`);
  }

  // public addUsuario(usuario: Usuario): Observable<Usuario> {
  //   return this.http.post<Usuario>(`${this.apiServerUrl}/usuario/add`, usuario);
  // }

  // public updateUsuario(usuario: Usuario): Observable<Usuario> {
  //   return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`, usuario);
  // }

  // public deleteUsuario(usuarioId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/usuario/delete/${usuarioId}`);
  // }
}
