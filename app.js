import express from "express";
import emoji from 'node-emoji'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


import { router } from "./src/routers/router.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

const PORT = 8080
app.use(router)

const server = app.listen(PORT,() => {console.log(`${emoji.get('computer')}Server ON port ${PORT}`)})

server.on('error',(error) => console.log(error))