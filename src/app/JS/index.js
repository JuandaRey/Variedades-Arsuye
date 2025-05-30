// script.js

// Posible funcionalidad: Mostrar un mensaje al hacer clic en un producto
document.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        producto.addEventListener('click', () => {
            const nombreProducto = producto.querySelector('img').alt;
            alert(`Hiciste clic en: ${nombreProducto}`);
            // Aquí podrías agregar más lógica, como redirigir a una página de detalle del producto.
        });
    });

    // Posible funcionalidad: Cambiar el estilo del botón "Iniciar sesión" al pasar el ratón (esto también se puede hacer con CSS)
    const iniciarSesionBtn = document.querySelector('nav ul li:last-child a');
    if (iniciarSesionBtn) {
        iniciarSesionBtn.addEventListener('mouseover', () => {
            iniciarSesionBtn.style.backgroundColor = '#e885a3';
            iniciarSesionBtn.style.cursor = 'pointer';
        });
        iniciarSesionBtn.addEventListener('mouseout', () => {
            iniciarSesionBtn.style.backgroundColor = '#f5a9bc';
        });
    }

    // Otras posibles funcionalidades que podrías agregar:
    // - Filtrado de productos
    // - Animaciones al cargar la página o al interactuar
    // - Validación de formularios de inicio de sesión (si agregas uno)
});