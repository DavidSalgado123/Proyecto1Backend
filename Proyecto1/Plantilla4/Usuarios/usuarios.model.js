const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
  nombre: {
      type: String,
      required: true,
      minLength: 2
  },
  apellido: {
      type: String,
      required: true,
      minLength: 2,
  },
  direccion: {
    calle: String,
    numero: String,
    ciudad: String,
    codigoPostal: String,
    pais: String,
    required: true
  },
  fotoPerfil:{
      type: String, //la url
      validate: () => {
          // Validar que la URL sea válida
          return true;
      }
  },
  telefono: { 
      type: String, 
      required: true,
      unique: true,
      validate: ()=> {
        //validar que el telefono sea un telefono valido.
        return true
    }
  },
  correo: {
      type: String,
      required: true,
      validate: ()=> {
        // Validar que el correo electrónico tenga un formato correcto
        return true        
      },
      unique: true
  },
  contrasena:{
      type: String,
      required: true,
      minLength: 8,
      maxLength: 24 
      // Puedes añadir más validaciones para contraseñas aquí
  },
  fechaDeNacimiento: {
      type: Date,
      required: true,
      validate: ()=> {
          // La fecha de nacimiento debe ser en el pasado
          return true
      }
  },
  esAdministrador: {
    type: Boolean,
    default: false
  },
  habilitado: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('usuario', usuarioSchema);
