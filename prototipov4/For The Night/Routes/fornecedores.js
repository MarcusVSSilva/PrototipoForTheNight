const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const db = require('../models/db');

router.get("/", (req, res) => {
    res.render('../views/fornecedor.html');
});

router.post('/', (req, res)=>{
    let cnpj = req.body.cnpj;
    let razao_social = req.body.razao_social;
    let nome_fantasia = req.body.nome_fantasia;
    let cep = req.body.cep;
    let estado = req.body.estado;
    let cidade = req.body.cidade;
    let bairro = req.body.bairro;
    let rua = req.body.rua;
    let numero_estabelecimento = req.body.numero_estabelecimento;
    let telefone = req.body.telefone;
    let celular = req.body.celular;

    let query = `insert into fornecedores (cnpj, razao_social, nome_fantasia, cep, estado, cidade, bairro, rua, numero, telefone, celular) values ("${cnpj}", "${razao_social}", "${nome_fantasia}", "${cep}", "${estado}", "${cidade}", "${bairro}", "${rua}", "${numero_estabelecimento}", "${telefone}", "${celular}")`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.render('fornecedor');
        }
    });
});

module.exports = router;