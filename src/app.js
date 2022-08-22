const express = require('express');
const app = express();

const cors=require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/users',require('./routes/users'));
app.use('/api/notes',require('./routes/notes'));

module.exports = app;