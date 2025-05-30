import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarruselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  nombreUsuario: string = '';

  constructor(private titleService: Title, private authService: AuthService) { }

  ngOnInit(): void {
  this.titleService.setTitle('Variedades Arsuye');
  this.nombreUsuario = localStorage.getItem('usuarioNombre') || 'Invitado';
  }
}
