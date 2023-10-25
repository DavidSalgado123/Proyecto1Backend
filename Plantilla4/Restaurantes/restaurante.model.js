const mongoose = require('mongoose');

const restauranteSchema = mongoose.Schema({
  nombre: {
      type: String,
      required: true,
      minLength: 2,
      unique: true
  },
  categorias: {
      type: [String], // Lista de categorías del restaurante
      required: true
  },
  usadomiciliariospropios: {
      type: Boolean,
      required: true
  },
  costoenviopropio: {
      type: Number,
      validate: ()=> {
          //validar que el costo sea mayor o igual a 0
          return true
      }
  },
  tiempoEstimadoEnvio: {
      type: String,
      required: true
  },
  administrador: {
      nombre: String,
      correo: String,
      telefono: String,
      required: true
  },
  calificacion: {
      type: Number,
      min: 0,
      max: 5
  },
  ubicaciones: {
      direccion: String,
      rangoservicio: Number, // El radio en kilometros a partir de la ubicación
      required: true
  },
  menu: {
      categoria: [String],
      unique: true,
      platos: [{
          nombre: String,
          descripcion: String,
          precio: Number,
          min:1
      }]
  }
})

export default mongoose.model('restaurante', restauranteSchema);
