import mongoose from 'mongoose' // importar modulo mongoose

// Function asíncrona autoinvocada (una función flecha envuelta entre paréntesis y seguida de ()),
// lo que significa que se ejecutará inmediatamente después de ser definida.
( async () => {

    try {

   const db = await mongoose.connect('mongodb://localhost:27017/TestMVC')
    console.log(`mongoDB Database: --> ${ db.connection.name }`)

    }

    catch (error) {

        console.error(error)

    }


 })();

// Dentro de la función asíncrona, se intenta establecer una conexión a la base de datos MongoDB utilizando mongoose.connect().
// Este método devuelve una promesa, que se puede esperar con await