import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    estado: 'disponible'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoService.obtenerProductoPorId(id).subscribe((data) => {
      this.producto = data;
    });
  }

  guardarCambios() {
    this.productoService.actualizarProducto(this.producto.id, this.producto).subscribe(() => {
      this.router.navigate(['/listar-productos']);
    });
  }
}
