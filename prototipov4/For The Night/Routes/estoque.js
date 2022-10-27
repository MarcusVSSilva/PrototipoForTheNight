const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const db = require('../models/db');

router.get("/", (req, res) => {
    res.render('../views/estoque.html'); 
});

router.post("/", (req, res) => {
    let nome = req.body.nome_produto;
    let qtd = req.body.qtd_produto;
    let data = req.body.data_entrada;
    let categoria = req.body.categoria;
    let valor = req.body.valor_compra;
    

    let query = `insert into estoque (nome, quantidade, data_entrada, categoria, valor_compra) values ("${nome}", "${qtd}", "${data}", "${categoria}", "${valor}" )`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.render('estoque');
        }
    });

});

router.delete("/", (req, res) => {
    let btn_deletar = req.body.delete;
    btn_deletar.addEventListener("click", function(){
        let id = req.body.id_produto;
    
        let query = `delete from estoque where id_produto = ${id.value}`;

        db.query(query, function(error, data){
            if(error){
                throw error;
            }else{
                res.render('estoque');
            }
        });
    });
});




module.exports = router;