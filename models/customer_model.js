import mongoose from 'mongoose'

// mongoose esquema Se define un esquema utilizando mongoose.Schema().
// Este esquema describe la estructura de los documentos que se almacenarán
// en la colección de clientes en la base de datos MongoDB.
// El esquema especifica los campos name, rut, email y whatsapp,
// junto con sus tipos de datos.
const customer_schema = new mongoose.Schema ({
    name :'String',
    rut : 'String',
    email: 'String',
    whatsapp : 'String'
},

    {versionKey:false})
//Cuando se guarda un documento en MongoDB, por defecto se añade un campo
// llamado __v (también conocido como versionKey) que indica la versión del documento.
// Este comportamiento se utiliza para controlar las actualizaciones concurrentes de documentos en MongoDB.

const Customer = mongoose.model('Customer',customer_schema)

// create interfase model Se crea un modelo utilizando mongoose.model().
// Este modelo se utiliza para interactuar con la colección de clientes
// en la base de datos. Se le da el nombre "customer" y se asocia con el
// esquema definido anteriormente.


export default Customer;
//exporta el modelo Customer para que pueda ser
// utilizado en otros archivos de la aplicación.