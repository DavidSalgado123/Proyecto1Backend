import { createProducto, deleteProducto, getProducto, patchProducto } from "./productoss.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /
// Ruta para obtener producto por ID
router.get('/producto/id/:id', getProducto);

// Ruta para obtener productos por restaurante
router.get('/producto/restaurante/:restaurante', getProducto);

// Ruta para obtener productos por categoría
router.get('/producto/categoria/:categoria', getProducto);

// Endpoint POST /
router.post('/', createProducto );

// Endpoint PATCH /  (Ruta para actualizar un producto por ID)
router.patch('/producto/id/:id', patchProducto);

// Endpoint DELETE / (Ruta para inhabilitar un producto por ID)
router.delete('/producto/id/:id', deleteProducto);


export default router;