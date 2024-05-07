import  express  from 'express'

const router =express.Router()  //método Router() de Express para crear un enrutador.
                               // Los enrutadores en Express permiten organizar las rutas y controladores (manejadores de solicitudes) en un archivo separado,
                               // lo que ayuda a modularizar y organizar mejor una aplicación web.
router.get('/', (req, res) => {  //Esta función toma dos argumentos, method req y res, que representan el objeto de solicitud (request) y el objeto de respuesta (response) respectivamente.

    res.render('pages/home/homepage'); //renderización en la pagina principal. respondiendo.
})

// importation de controlador


export default router;