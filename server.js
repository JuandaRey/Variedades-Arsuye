const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const dbConfig = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
sql.connect(dbConfig).then(pool => {
    console.log('✅ Conectado a SQL Server');

    // Productos - obtener todos
    app.get('/api/productos', async (req, res) => {
        try {
            const result = await pool.request().query('SELECT * FROM Productos');
            res.json(result.recordset);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    // Productos - obtener por id
    app.get('/api/productos/:id', async (req, res) => {
        try {
            const result = await pool
                .request()
                .input('id', sql.Int, req.params.id)
                .query('SELECT * FROM Productos WHERE id = @id');
            if (result.recordset.length === 0) {
                res.status(404).send('Producto no encontrado');
            } else {
                res.json(result.recordset[0]);
            }
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    // Productos - crear
    app.post('/api/productos', async (req, res) => {
        const { Nombre, Descripcion, Precio, Cantidad, Estado } = req.body;
        try {
            await pool
                .request()
                .input('Nombre', sql.NVarChar, Nombre)
                .input('Descripcion', sql.NVarChar, Descripcion)
                .input('Precio', sql.Decimal, Precio)
                .input('Cantidad', sql.Int, Cantidad)
                .input('Estado', sql.NVarChar, Estado)
                .query('INSERT INTO Productos (Nombre, Descripcion, Precio, Cantidad, Estado) VALUES (@Nombre, @Descripcion, @Precio, @Cantidad, @Estado)');
            res.status(201).send('Producto creado correctamente');
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    // Productos - actualizar
    app.put('/api/productos/:id', async (req, res) => {
        const { Nombre, Descripcion, Precio, Cantidad, Estado } = req.body;
        try {
            await pool
                .request()
                .input('id', sql.Int, req.params.id)
                .input('Nombre', sql.NVarChar, Nombre)
                .input('Descripcion', sql.NVarChar, Descripcion)
                .input('Precio', sql.Decimal, Precio)
                .input('Cantidad', sql.Int, Cantidad)
                .input('Estado', sql.NVarChar, Estado)
                .query('UPDATE Productos SET Nombre = @Nombre, Descripcion = @Descripcion, Precio = @Precio, Cantidad = @Cantidad, Estado = @Estado WHERE id = @id');
            res.send('Producto actualizado correctamente');
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    // Productos - eliminar
    app.delete('/api/productos/:id', async (req, res) => {
        try {
            await pool
                .request()
                .input('id', sql.Int, req.params.id)
                .query('DELETE FROM Productos WHERE id = @id');
            res.send('Producto eliminado correctamente');
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    // Usuarios - listar
    app.get('/api/usuarios', async (req, res) => {
        try {
            const result = await pool.request().query('SELECT * FROM Usuarios');
            res.json(result.recordset);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    // Usuarios - crear
    app.post('/api/usuarios', async (req, res) => {
        const { Nombre, Correo, Clave } = req.body;
        try {
            await pool
                .request()
                .input('Nombre', sql.NVarChar, Nombre)
                .input('Correo', sql.NVarChar, Correo)
                .input('Clave', sql.NVarChar, Clave)
                .query('INSERT INTO Usuarios (Nombre, Correo, Clave) VALUES (@Nombre, @Correo, @Clave)');
            res.send('Usuario creado correctamente');
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

}).catch(err => {
    console.error('❌ Error al conectar a la base de datos:', err);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
