import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  imagenes: string[] = [
    'assets/carrucel-img1.png',
    'assets/carrucel-img2.png',
    'assets/carrucel-img3.png'
    // Agrega aquí las rutas de tus imágenes
  ];
  currentIndex: number = 0;

  constructor() {
    // Opcional: Inicia el carrusel automático después de un tiempo
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambia de imagen cada 3 segundos
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.imagenes.length) % this.imagenes.length;
  }
}