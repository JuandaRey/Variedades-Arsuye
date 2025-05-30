import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    estado: 'disponible' 
  };
  

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  guardarProducto(): void {
    this.producto.estado = this.producto.cantidad > 0 ? 'disponible' : 'agotado';

    this.productoService.crearProducto(this.producto).subscribe({
      next: () => {
        alert('Producto creado correctamente');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error al crear producto:', err);
      }
    });
  }
}
