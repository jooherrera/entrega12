import { Router } from "express";
const home = Router()

home.get('/',(req, res) => {
  try {
    if(req.session.contador){
      req.session.contador++
    }else{
      req.session.contador = 1
      // return res.status(200).json({error : false, msg : "Bienvenido!"})
    }
    // res.status(200).json({error: false , msg : `Has visitado la pagina ${req.session.contador} veces.`})
    if(req.session.usuario){
      res.render('logeado',{
        title : "LOGEADO",
        user : req.session.user
      })
    }else{
      res.render('home',{
        title : "Home",
        user : req.session.user || 'invitado'
      })
    }


   
  } catch (error) {
    
  }
})

export {home}