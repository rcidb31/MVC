import './db.config.js' // configuration mongo db

import express from 'express' // configurando framework web node modules
const app=express();         // uso de express , activar funcionamiento de express


import cors from "cors"; // código configura el middleware CORS en una aplicación Node.js
app.use(cors())          // para permitir solicitudes de recursos entre diferentes orígenes, gestionar las solicitudes de recursos entre dominios cruzados
                         // lo que es útil en aplicaciones web que necesitan interactuar con recursos alojados en servidores diferentes al propio.


import morgan from 'morgan'    // morgan es un logger de request de http , nos permite que cada vez que se realize un request podamos mostrar info en la consola
app.use(morgan('tiny')) //este código establece un middleware de morgan para registrar información sobre las solicitudes HTTP entrantes en una aplicación Express.js utilizando el formato 'tiny'.
                              // Esto puede ser útil para el seguimiento y la depuración de solicitudes entrantes en una aplicación web.

                                    // app.use() es un método utilizado para montar middleware
app.use(express.static('assets'))  // configura un middleware en la aplicación Express.js para servir archivos estáticos desde el directorio assets. css,js,pdf,etc
                                  //Esto es útil para servir archivos estáticos como parte de una aplicación web.


app.set('view engine','pug') // motor de template compilador de vistas , procesar el html.
app.set('views','views')  //carpetas de las vistas


import bodyParser from "body-parser"              //  middleware para Express.js que facilita el manejo de datos en las solicitudes HTTP,
app.use(bodyParser.urlencoded({extended:true}))  // especialmente en lo que respecta al cuerpo de la solicitud (request body , convierte form data a json).
                                                // connection con backend


import methodOverride from 'method-override'   // Config. Recognizes PUT, PATCH and DELETE method
                                              // establece un middleware en una aplicación Express.js
                                             //    para anular los métodos de solicitud HTTP. Esto permite que los clientes utilicen
                                            //     métodos como PUT, PATCH y DELETE incluso en entornos que no los admiten directamente (como los formularios HTML, que solo admiten GET y POST).
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))


import routes_home from './routes/home_routes.js'  // Config Routes
app.use('/', routes_home) // implementation usar , en la raíz o home.

import routes_customer from './routes/customer_routes.js'  // Config Routes
app.use('/customer', routes_customer) // implementation usar , en la raíz o home.


app.listen( process.env.PORT || 4000, () => {                // En resumen, este código inicia un servidor
    console.log("Backend Port: 4000, Frontend Port: 4001")
})                                                         // Express que escucha las solicitudes entrantes en el puerto especificado
                                                          // por la variable de entorno PORT, o en el puerto 4000 si esa variable no está definida.
                                                        // Una vez que el servidor está listo, se ejecuta la función de flecha proporcionad


