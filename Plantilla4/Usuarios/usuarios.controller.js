
import Usuario from './usuarios.model';

export async function getUsuario(req, res) {
  try {
    const usuarios = await Usuario.find(req.query);
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuarios', error: error.message });
  }
}

export async function createUsuario(req, res) {
  try {
    const { name } = req.body;
    const usuario = new Usuario({ name });
    const resultado = await usuario.save();
    res.status(201).json({ mensaje: 'Usuario creado exitosamente', usuario: resultado });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al crear el usuario', error: err.message });
  }
}


export async function patchUsuario(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    usuario.name = name;
    const resultado = await usuario.save();

    res.status(200).json({ mensaje: 'Usuario actualizado exitosamente', usuario: resultado });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al actualizar el usuario', error: err.message });
  }
}

export async function deleteUsuario(req, res) {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Aquí deberías tener un campo 'habilitado' en tu modelo Usuario
    usuario.habilitado = false;
    await usuario.save();

    res.status(200).json({ mensaje: 'Usuario inhabilitado exitosamente' });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al inhabilitar el usuario', error: err.message });
  }
}