const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, 'Nombre del Usuario'] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('usuario', usuarioSchema);
