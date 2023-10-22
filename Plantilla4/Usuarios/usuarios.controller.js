
import Usuario from './usuarios.model';

export async function getUsuario(req,res) {
  // const { name } = req.query;

  const usuarios = await Usuario.find(req.query);

  res.status(200).json(usuarios);
}

export async function createUsuario(req, res) {
  try {
    const { name } = req.body;
    const usuario = new Usuario({ name });
    const resultado = await usuario.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}


export async function patchUsuario(req, res) {
  res.status(200).json({});
}

export async function deleteUsuario(req, res) {
  res.status(200).json({});
}