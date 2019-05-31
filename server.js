const express = require('express');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    return res.send('Yo yo yo');
})

module.exports = server;