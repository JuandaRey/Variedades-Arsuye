// src/app/producto-edit/producto-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../models/producto.model';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
  producto: Producto | undefined;
  productoId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productoId = Number(params.get('id'));
      if (this.productoId) {
        this.productoService.getProductoById(this.productoId).subscribe(
          (data) => {
            this.producto = data;
          },
          (error) => {
            console.error('Error al cargar el producto para editar:', error);
            this.router.navigate(['/productos']); // Redirigir si no se encuentra el producto
          }
        );
      }
    });
  }

  onSubmit(): void {
    if (this.producto && this.productoId) {
      this.productoService.updateProducto(this.productoId, this.producto).subscribe(
        (response) => {
          console.log('Producto actualizado exitosamente:', response);
          this.router.navigate(['/productos']); // Redirigir a la lista después de actualizar
        },
        (error) => {
          console.error('Error al actualizar producto:', error);
        }
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/productos']);
  }
}