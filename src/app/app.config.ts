import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { ProductosComponent } from './productos/productos.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { provideHttpClient } from '@angular/common/http'; 

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent } 
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient() 
  ]
};