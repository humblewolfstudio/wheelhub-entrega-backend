import express from 'express'
import { create } from '../controllers/api.controller';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: Nombre identificativo del usuario
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *       example:
 *         username: Test
 *         password: test
 *     Response:
 *       type: object
 *       properties:
 *         status:
 *           type: number
 *           description: Status code de la petición 
 *         message:
 *           type: string
 *           description: Mensaje de respuesta de la API
 *       example:
 *         status: 200
 *         message: El usuario se creó correctamente
 */

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoint para crear un usuario
 * /api/create:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       400:
 *         description: Usuario y/o contraseña tienen que ser un string
 *       500:
 *         description: Error interno del servidor
 *
 */

router.post('/create', create);

export default router;