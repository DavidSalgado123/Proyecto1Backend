
import Producto from './productos.model';

export async function getProducto(req, res) {
  try {
    const { id, restaurante, categoria } = req.query;

    if (id) {
      // Buscar producto por ID
      const producto = await Producto.findById(id);
      if (!producto) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
      }
      return res.status(200).json(producto);
    } else if (restaurante) {
      // Buscar productos por restaurante
      const productos = await Producto.find({ restaurante });
      return res.status(200).json(productos);
    } else if (categoria) {
      // Buscar productos por categoría
      const productos = await Producto.find({ categoria });
      return res.status(200).json(productos);
    } else {
      return res.status(400).json({ mensaje: 'Se requiere proporcionar ID, restaurante o categoría' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener producto', error: error.message });
  }
}

export async function createProducto(req, res) {
  try {
    const {restaurante,nombre,categoria,descripcion,ingredientes,disponibilidad,precio,foto,habilitado} = req.body;

    const producto = new Producto({
      restaurante,
      nombre,
      categoria,
      descripcion,
      ingredientes,
      disponibilidad,
      precio,
      foto,
      habilitado
    });

    const resultado = await producto.save();

    res.status(201).json({ mensaje: 'Producto creado exitosamente', producto: resultado });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al crear el producto', error: err.message });
  }
}

export async function patchProducto(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    // Actualizar los datos del producto con los proporcionados en updateData
    for (const key in updateData) {
      producto[key] = updateData[key];
    }

    const resultado = await producto.save();

    res.status(200).json({ mensaje: 'Producto actualizado exitosamente', producto: resultado });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al actualizar el producto', error: err.message });
  }
}

export async function deleteProducto(req, res) {
  try {
    const { id } = req.params;

    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    producto.disponibilidad = false; // Marcar el producto como no disponible
    await producto.save();

    res.status(200).json({ mensaje: 'Producto inhabilitado exitosamente' });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al inhabilitar el producto', error: err.message });
  }
}
