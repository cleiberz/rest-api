const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET na rota de produtos'
    });
});


router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'POST na rota de produtos'
    });
});

module.exports = router;