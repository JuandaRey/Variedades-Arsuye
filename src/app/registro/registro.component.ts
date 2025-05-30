import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule], // Importa FormsModule aquí
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario = {
    Nombre: '',
    Correo: '',
    Clave: '',
    confirmarContrasena: ''
  };

  constructor(private router: Router, private titleService: Title, private auth: AuthService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Registrarse');
  }

  onSubmit() {
    if (this.usuario.Clave !== this.usuario.confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const usuarioParaBackend = {
      Nombre: this.usuario.Nombre,
      Correo: this.usuario.Correo,
      Clave: this.usuario.Clave
      // Es posible que no necesites enviar confirmarContrasena al backend
    };

    this.auth.registrarse(usuarioParaBackend).subscribe({
      next: (_) => {
        alert('¡Registro exitoso!');
        this.router.navigate(['/iniciar-sesion']);
      },
      error: err => {
        alert('Error en el registro. Inténtalo de nuevo.');
        console.error('Error de registro:', err);
        // Aquí puedes agregar más lógica para manejar el error
        // Por ejemplo, mostrar un mensaje de error más específico al usuario
        // basado en la respuesta del backend (err).
      }
    });
  }
}