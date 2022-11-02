const express = require('express');
const db = require('../models/connection');
const router = express.Router();

router.get('/', (req, res) => {
    let sql = 'select * from fornecedor';

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('fornecedores', { data: result});
    });
});

router.post("/", (req, res) => {
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


    let query = `insert into fornecedor (cnpj_fornecedor, razao_social, nome_fantasia, cep, estado, cidade, bairro, rua, numero, celular, telefone) values ("${cnpj}", "${razao_social}", "${nome_fantasia}", "${cep}", "${estado}", "${cidade}", "${bairro}", "${rua}", "${numero_estabelecimento}", "${telefone}", "${celular}")`;

    db.query(query, [req.params.cnpj], function (error, data) {
        if (error) {
            throw error;
        } else {
            res.render('admin');
        }
    });
});

router.delete("/", (req, res) => {
    let query = `delete from fornecedor where cnpj_fornecedor = "?"`;

    db.query(query, function (error, data) {
        if (error) {
            throw error;
        } else {
            res.render('admin');
        }
    });
});

module.exports = router;