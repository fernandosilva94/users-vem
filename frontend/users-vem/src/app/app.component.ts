import { UsuarioService } from './services/usuario.service';
import { UsuarioModel } from './usuario';
import { Component, OnInit } from '@angular/core';
// import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public usuario!: UsuarioModel[];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    // this.getUsuarios();
  }

  // public getUsuarios(): void {
  //   this.usuarioService.getUsuario().subscribe(
  //     (response: Usuario[]) => {
  //       console.log(this.usuario = response);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }
}
