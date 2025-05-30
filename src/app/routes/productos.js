const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbConfig = require('../config/db');

router.put('/productos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, cantidad, estado } = req.body;

    const pool = await sql.connect(dbConfig);
    await pool.request()
      .input('id', sql.Int, id)
      .input('nombre', sql.VarChar, nombre)
      .input('descripcion', sql.VarChar, descripcion)
      .input('precio', sql.Decimal(10, 2), precio)
      .input('cantidad', sql.Int, cantidad)
      .input('estado', sql.VarChar, estado)
      .query(`
        UPDATE productos
        SET nombre = @nombre,
            descripcion = @descripcion,
            precio = @precio,
            cantidad = @cantidad,
            estado = @estado
        WHERE id = @id
      `);

    res.status(200).json({ mensaje: 'Producto actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
});

module.exports = router;
