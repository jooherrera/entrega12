import { Router } from "express";
const prodTest = Router()
import Controller from '../controller/prodTest.controller.js'




prodTest.get('/productos-test',Controller.getProducts)

export {prodTest}