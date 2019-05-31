const express = require('express');
const recipes = require('./routes/recipes');

const server = express();
server.use(express.json());

server.use('/api/recipes', recipes);

server.get('/', (req, res) => {
    return res.send('Yo yo yo');
})

module.exports = server;