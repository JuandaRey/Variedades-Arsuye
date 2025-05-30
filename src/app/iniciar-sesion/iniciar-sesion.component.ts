import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  usuario = '';
  contrasena = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Iniciar Sesion');
  }

  onSubmit(): void {
    this.authService.iniciarSesion(this.usuario, this.contrasena).subscribe({
      next: (response) => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.errorMessage = 'Usuario o contraseña incorrectos.';
        alert('Usuario o contraseña incorrectos.');
        console.error('Error de inicio de sesión:', error);
      }
    });
  }
}