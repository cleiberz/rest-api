const express = require('express');
const app = express();
app.use((req, res, netxt) => {
    res.status(200).send({
        mensagem: 'Tudo certo!'
    })
})
module.exports = app;