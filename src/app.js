const express = require('express');
const app = express();
const cors =require('cors');

//settings

app.set('port', process.env.PORT || 4000);

app.use(cors());


//middlewares

module.exports = app;
app.use(express.json());


//routes

app.get('/api/users', (req,res) => res.send('Users Routes'));
app.get('/api/notes',(req,res)=>res.send('Notes Routes'));