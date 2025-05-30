import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { ProductosComponent } from './productos/productos.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductoCreateComponent } from './producto-create/producto-create.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { ProductListComponent } from './producto-list/producto-list.component';

export const routes: Routes = [
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