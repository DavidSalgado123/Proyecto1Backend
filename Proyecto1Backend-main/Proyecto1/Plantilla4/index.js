import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Creacion del app
const app = express();

// Conexión a MongoDB usando mongoose
mongoose
  .connect(
    'mongodb+srv://' +
      process.env.MONGO_USER +
      ':' +
      process.env.MONGO_PASS +
      '@proyecto1backend.j7jmslp.mongodb.net/',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Connected.');
  })
  .catch((err) => {
    console.log('There was an error with connection!');
    console.log(err);
  });

// Middlewares
app.use(cors());
app.use(express.json());

import usuariosRoutes from './Usuarios/usuarios.routes'
app.use('/usuarios', usuariosRoutes)
import restaurantesRoutes from './Restaurantes/restaurante.routes'
app.use('/restaurante', restauranteRoutes)
import productosRoutes from './Productos/productos.routes'
app.use('/productos', productosRoutes)
import pedidoRoutes from './Pedidos/pedido.routes'
app.use('/pedido', pedidoRoutes)

// Endpoint para 404
app.use((req, res) => {
  res.status(404).json({ message: 'Not found.' });
});

// Inicia app en puerto 8080
app.listen(8080);
