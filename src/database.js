
require('dotenv').config();
const mongoose=require('mongoose');
console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: 'mongodb://localhost/mernstack' ;



mongoose.connect(URI, {
    useNewUrlParser: true,
   // useCreateIndex: true
 });




const connection =  mongoose.connection;
connection.once('open', () => {
console.log('Conexion establecida con la base de datos');
 });


// async function connect() {

//     try {

//         await mongoose.connect(URI);
//         console.log('Conectado con base de datos MongoDB');

        

//     }
//     catch (err) {

//         console.log('Error al conectar con Mongo DB')

//     }
// }

// connect()