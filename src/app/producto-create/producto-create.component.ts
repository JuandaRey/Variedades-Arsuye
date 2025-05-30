import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-create',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {
  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    estado: 'disponible'
  };

  cargando: boolean = false;
  error: string = '';

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("✅ ProductoCreateComponent cargado correctamente."); // Verificar carga en consola
  }

  onSubmit(): void {
    this.cargando = true;
    this.productoService.createProducto(this.producto).subscribe(
      (response: Producto) => {
        console.log('Producto creado exitosamente:', response);
        this.router.navigate(['/productos']);
        this.cargando = false;
      },
      (error: any) => {
        console.error('Error al crear producto:', error);
        this.error = 'Error al crear el producto.';
        this.cargando = false;
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/productos']);  // ✅ Se aseguró que `cancel()` esté bien implementada
  }
}
