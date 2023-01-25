import { CartaoComponent } from './cartao/cartao.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "usuario", component: UsuarioComponent},
  {path: "cartao", component: CartaoComponent},
  {path: "", redirectTo: "usuario", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
