const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const db = require('../models/db');
const bcrypt = require('bcrypt');


router.get("/", (req, res) => {
    res.render('../views/cadastro.html');
});

router.post('/', (req, res)=>{
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let data_nascimento = req.body.data_nascimeto;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let celular = req.body.celular;
    let genero = req.body.gender;
    let senha = req.body.senha;
    const senhaCriptografada = bcrypt.hashSync(obj.senha, 10);
    senha = senhaCriptografada;

    let cmd_insert = `insert into users (nome, sobrenome, data_nascimento, cpf, email, celular, senha, genero) values ("${nome}", "${sobrenome}", "${data_nascimento}", "${cpf}", "${email}", "${celular}", "${senha}", "${genero}" )`;

    db.cmd_insert(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.render('cadastro');
        }
    });
});

module.exports = router;