const mongoose = require('mongoose');

const restauranteSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, 'Nombre del restaurante'] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('restaurante', restauranteSchema);
