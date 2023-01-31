import { CreateCartaoComponent } from './create-cartao/create-cartao.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { CartaoComponent } from './cartao/cartao.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: "usuario", component: UsuarioComponent},
  {path: "cartao", component: CartaoComponent},
  {path: "create-usuario", component: CreateUsuarioComponent},
  {path: "create-cartao/:id", component: CreateCartaoComponent},
  {path: "", redirectTo: "usuario", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            ReactiveFormsModule,
            FormsModule
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
