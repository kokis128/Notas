require('dotenv').config;
var app = require('./app')
require('./database');
var port = 4000;
async function main() {       

        await app.listen(port)
        console.log('Server on port ' , app.get('port'))
}

main();






