// src/app/producto-list/producto-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productoService.getAllProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      },
      (error: any) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  editProducto(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate([`/productos/edit/${id}`]);
    } else {
      console.warn('ID de producto no definido para editar.');
    }
  }

  deleteProducto(id: number | undefined): void {
    if (id !== undefined) {
      if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        this.productoService.deleteProducto(id).subscribe(
          () => {
            console.log('Producto eliminado exitosamente.');
            this.loadProductos(); 
          },
          (error: any) => {
            console.error('Error al eliminar producto:', error);
          }
        );
      }
    } else {
      console.warn('ID de producto no definido para eliminar.');
    }
  }

  createProducto(): void {
    this.router.navigate(['/productos/create']);
  }
}