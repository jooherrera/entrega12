import { Router } from "express";
// import {prodTest,login ,home , logout} from './index.routers.js'
import {auth} from '../middleware/auth.middleware.js'
import *  as ruta from './index.routers.js'

const router = Router()


router.use('/api',ruta.prodTest)
router.use('/login',ruta.login)
router.use('/logout',ruta.logout)
router.use('/',ruta.home)
router.use('/restringida', auth ,ruta.restringida)

export {router}