import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'variedades-arsuye';
  estaAutenticado: boolean = false;
  mostrarMenu: boolean = false;
  nombreUsuario: string = 'Mi Cuenta'; // Valor por defecto
  private authSubscription: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isLoggedIn.subscribe(loggedIn => {
      this.estaAutenticado = loggedIn;
      this.nombreUsuario = localStorage.getItem('usuarioNombre') || 'Mi Cuenta';
      console.log('Nombre recuperado en navbar:', this.nombreUsuario);
      this.cdRef.detectChanges(); // 🔥 Forzar actualización de la vista
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  toggleMenu(): void {
    this.mostrarMenu = !this.mostrarMenu;
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.nombreUsuario = 'Mi Cuenta'; // 🔥 Restablecer el nombre al cerrar sesión
    this.cdRef.detectChanges(); // 🔥 Forzar actualización de la vista
  }

  navegarInicioSesion(): void {
    this.mostrarMenu = false;
    this.router.navigate(['/iniciar-sesion']);
  }

  navegarRegistro(): void {
    this.mostrarMenu = false;
    this.router.navigate(['/registro']);
  }
}
