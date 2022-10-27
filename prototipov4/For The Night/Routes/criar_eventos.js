const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const db = require('../models/db');

router.get("/", (req, res) => {
    res.render('../views/criar_eventos.html'); 
});

router.post("/", (req, res) => {
    let nome = req.body.nome_evento;
    let data = req.body.data_evento;
    let qtd = req.body.quantidade_ingressos;
    let local = req.body.local_evento;
    

    let query = `insert into eventos (nome, data_evento, quantidade_ingressos, local_evento) values ("${nome}", "${data}", "${qtd}", "${local}")`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.render('criar_eventos');
        }
    });

});

module.exports = router;