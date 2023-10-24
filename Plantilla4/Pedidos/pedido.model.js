const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema(
  {
    // campos
    id: { type: Number, required: [true, 'Id del pedido'] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('pedido', pedidoSchema);
