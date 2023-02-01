import { UsuarioInfoComponent } from './usuario-info/usuario-info.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CartaoComponent } from './cartao/cartao.component';
import { CreateCartaoComponent } from './create-cartao/create-cartao.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: "usuario", component: UsuarioComponent},
  {path: "cartao", component: CartaoComponent},
  {path: "create-usuario", component: CreateUsuarioComponent},
  {path: "update-usuario/:id", component: UsuarioUpdateComponent},
  {path: "create-cartao/:id", component: CreateCartaoComponent},
  {path: "usuario-info/:id", component: UsuarioInfoComponent},
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
