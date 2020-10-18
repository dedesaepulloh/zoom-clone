const { RSA_NO_PADDING } = require('constants');
const express = require('express');
const app = express();
const server = require('http').Server(app);

app.get('/', (req, res) => {
    res.status(200).send("Hay hay")
})



server.listen(3030);