import { Router } from 'express'

const router = Router()

import * as noticiasController from '../controller/noticias.controller'

router.post('/', noticiasController.createNoticia)
router.get('/', noticiasController.listarNoticias)
router.get('/:noticiaId', noticiasController.listarNoticiaById)
router.put('/:noticiaId', noticiasController.actNoticia)
router.delete('/:noticiaId', noticiasController.elimNoticia)

export default router