import { Router } from 'express'

const router = Router()

import * as cursoController from '../controller/cursos.controller'

router.post('/', cursoController.createCurso)
router.get('/', cursoController.listarCursos)
router.get('/:cursoId', cursoController.listarCursoById)
router.put('/:cursoId', cursoController.actCurso)
router.delete('/:cursoId', cursoController.elimCurso)

export default router

