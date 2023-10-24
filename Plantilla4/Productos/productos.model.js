const mongoose = require('mongoose');

const productoSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, 'Nombre del producto'] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('producto', productoSchema);
