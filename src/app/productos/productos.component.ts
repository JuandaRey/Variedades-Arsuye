import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  cargando: boolean = false;
  error: string = '';

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando = true;
    this.productoService.getAllProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
        this.cargando = false;
      },
      (err) => {
        this.error = 'Error al cargar los productos';
        console.error(err);
        this.cargando = false;
      }
    );
  }

  irACrearProducto(): void {
    this.router.navigate(['/productos/create']);
  }



  editarProducto(id: number): void {
    this.router.navigate([`/productos/edit/${id}`]);
  }

  eliminarProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(
      () => {
        this.productos = this.productos.filter(producto => producto.id !== id);
        console.log('Producto eliminado correctamente');
      },
      (error) => {
        console.error('Error al eliminar el producto:', error);
      }
    );
  }
}
