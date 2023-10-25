import { createUsuario, deleteUsuario, getUsuario, patchUsuario } from "./usuarios.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/usuarios', getUsuario );

// Endpoint POST /prueba
router.post('/usuarios', createUsuario );


// Endpoint PATCH /prueba
router.patch('/usuarios/:id', patchUsuario );

// Endpoint DELETE /prueba
router.delete('/usuarios/:id', deleteUsuario );

export default router;