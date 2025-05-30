// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductListComponent } from './producto-list/producto-list.component';
import { ProductoCreateComponent } from './producto-create/producto-create.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registro', component: RegistroComponent },

  // --- Rutas específicas de productos primero ---
  { path: 'productos/create', component: ProductoCreateComponent },
  { path: 'productos/edit/:id', component: ProductoEditComponent },
  { path: 'productos', component: ProductListComponent }, 

  // --- Ruta comodín al final ---
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }