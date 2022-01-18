import { Router } from "express";
import * as usuarioRoutes from '../controllers/usuarioController';

const router = Router();

//cadastro de usuario - GET/POST POST
router.get('/cadastro', usuarioRoutes.cadastro);
router.post('/cadastro', usuarioRoutes.cadastro);

//Listar e Pesquisar usuario - GET - queryString
router.get('/usuario', usuarioRoutes.usuario);
router.get('/search', usuarioRoutes.search);

//Editar e Apagar usuario
router.get('/usuario/:id/editar', usuarioRoutes.editarUser);
router.post('/usuario/:id/editar', usuarioRoutes.updateUser);
router.get('/usuario/:id/excluir', usuarioRoutes.deletarUser);

export default router;