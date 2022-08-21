const app = require('./app'); 

async function start(){
 await app.listen(4000);
 console.log('servidor en puerto 4000')
}
start();

