import { Router } from "express";
import {prodTest} from './prodTest.router.js'
const router = Router()


router.use('/api',prodTest)


export {router}