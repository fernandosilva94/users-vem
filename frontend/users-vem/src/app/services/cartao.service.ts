import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartaoModel } from '../cartao';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  private apiServerUrl = "http://localhost:8080/api/cartao";

  constructor(private http: HttpClient) { }

  public getCartao(): Observable<CartaoModel[]> {
    return this.http.get<CartaoModel[]>(`${this.apiServerUrl}`);
  }

  public getCartaoById(id: number): Observable<CartaoModel> {
    return this.http.get<CartaoModel>(`${this.apiServerUrl}/${id}`);
  }

  public addCartao(cartao: CartaoModel): Observable<CartaoModel> {
    return this.http.post<CartaoModel>(`${this.apiServerUrl}`, cartao);
  }
}
