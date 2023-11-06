
import Usuario from './usuarios.model';

export async function getUsuario(req, res) {
  try {
    const { id, correo, contrasena } = req.query;
    let usuario;

    if (id) {
      // Buscar usuario por ID
      usuario = await Usuario.findById(id);
    } else if (correo && contrasena) {
      // Buscar usuario por correo y contraseña
      usuario = await Usuario.findOne({ correo, contrasena });
    } else {
      return res.status(400).json({ mensaje: 'Se requiere correo y contraseña' });
    }

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuario', error: error.message });
  }
}


export async function createUsuario(req, res) {
  try {
    const { nombre, apellido, direccion, fotoPerfil, telefono, correo, contrasena, fechaDeNacimiento, esAdministrador, habilitado } = req.body;
    const usuario = new Usuario({ 
      nombre,
      apellido,
      direccion,
      fotoPerfil,
      telefono,
      correo,
      contrasena,
      fechaDeNacimiento,
      esAdministrador,
      habilitado
    });
    const resultado = await usuario.save();
    res.status(201).json({ mensaje: 'Usuario creado exitosamente', usuario: resultado });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al crear el usuario', error: err.message });
  }
}


export async function patchUsuario(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body; 

    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Actualizar los datos del usuario con los proporcionados en updateData
    for (const key in updateData) {
      usuario[key] = updateData[key];
    }

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

    usuario.habilitado = false;
    await usuario.save();

    res.status(200).json({ mensaje: 'Usuario inhabilitado exitosamente' });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al inhabilitar el usuario', error: err.message });
  }
}