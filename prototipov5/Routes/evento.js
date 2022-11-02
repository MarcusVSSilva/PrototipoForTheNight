const express = require('express');
const db = require('../models/connection');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('../views/criar_eventos.ejs'); 
});

router.post("/", (req, res) => {
    let nome = req.body.nome;
    let qtd_ingressos = req.body.qtd_ingressos;
    let data_evento = req.body.data_evento;
    let local_evento = req.body.local_evento;
    let valor_ingresso = req.body.valor_ingresso;
    let lote = req.body.lote;
    
    let query = `insert into eventos (nome, quantidade_ingressos, data_evento, local_evento, valor_ingresso, lote) values ("${nome}", "${qtd_ingressos}", "${data_evento}", "${local_evento}", "${valor_ingresso}", "${lote}")`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.render('admin');
        }
    });
});

module.exports = router;