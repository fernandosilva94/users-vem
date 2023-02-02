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

  // loadById(id: string) {
  //   return this.http.get<UsuarioModel>(`${this.apiServerUrl}/${id}`);
  // };

  public getUsuario(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${this.apiServerUrl}`);
  }

  public getUsuarioById(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.apiServerUrl}/${id}`);
  }

  public addUsuario(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.apiServerUrl}`, usuario);
  }

  public updateUsuario(record: Partial<UsuarioModel>): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>(`${this.apiServerUrl}/${record.id}`, record);
  }

  public deleteUsuario(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.apiServerUrl}/${id}`);
  }
}
