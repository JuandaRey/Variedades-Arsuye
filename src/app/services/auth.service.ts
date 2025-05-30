import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginResponse {
  message: string;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/usuarios';
  private loggedIn = new BehaviorSubject<boolean>(this.hasLoggedInFlag());
  isLoggedIn = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  private hasLoggedInFlag(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  registrarse(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }

  iniciarSesion(nombre: string, contrasena: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { nombre, contrasena }).pipe(
      tap(response => {
        console.log('Respuesta del backend:', response);
        if (response.nombre) {
          localStorage.setItem('usuarioNombre', response.nombre);
          localStorage.setItem('isLoggedIn', 'true'); // 🔥 Guarda estado de sesión
          this.loggedIn.next(true); // 🔥 Notifica que el usuario ha iniciado sesión
        }
      })
    );
  }

  obtenerNombreUsuario(): string {
    return localStorage.getItem('usuarioNombre') || 'Mi Cuenta';
  }

  cerrarSesion(): void {
    this.loggedIn.next(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('usuarioNombre'); // 🔥 Eliminamos el nombre al cerrar sesión
    this.router.navigate(['/iniciar-sesion']);
    alert('Has cerrado sesión exitosamente.');
  }
}
