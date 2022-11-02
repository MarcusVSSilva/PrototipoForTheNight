const express = require('express');
const db = require('../models/connection');
const router = express.Router();
const bcrypt = require('bcrypt');


router.get("/", (req, res) => {
    res.render('../views/cadastro.ejs');
});

router.post('/', (req, res)=>{
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let data_nascimento = req.body.data_nascimento;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let celular = req.body.celular;
    let genero = req.body.gender;
    let senha = req.body.senha;
    const senhaCriptografada = bcrypt.hashSync(senha, 10);
    senha = senhaCriptografada;

    let query = `insert into usuarios (nome, sobrenome, data_nascimento, cpf, email, celular, senha, genero, tipo_usuario) values ("${nome}", "${sobrenome}", "${data_nascimento}", "${cpf}", "${email}", "${celular}", "${senha}", "${genero}", 1)`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.redirect('/login');
        }
    });
});

module.exports = router;