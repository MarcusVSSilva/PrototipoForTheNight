const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const db = require('../models/db');

router.get("/", (req, res) => {
    res.render('../views//criar_produtos.html'); 
});

router.post("/", (req, res) => {
    let nome = req.body.nome_produto;
    let data = req.body.data_validade;
    let qtd = req.body.valor_compra;
    let cat = req.body.categoria;
    

    let query = `insert into produtos (nome, data_validade, valor_compra, categoria) values ("${nome}", "${data}", "${qtd}", "${cat}")`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.render('criar_produtos');
        }
    });

});

module.exports = router;