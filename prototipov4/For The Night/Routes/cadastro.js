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
    let data_nascimento = req.body.data_nascimento;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let celular = req.body.celular;
    let genero = req.body.gender;
    let senha = req.body.senha;
    const senhaCriptografada = bcrypt.hashSync(senha, 10);
    senha = senhaCriptografada;

    let query = `insert into usuarios (nome, sobrenome, data_nascimento, cpf, email, celular, senha, genero) values ("${nome}", "${sobrenome}", "${data_nascimento}", "${cpf}", "${email}", "${celular}", "${senha}", "${genero}" )`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.render('cadastro');
        }
    });
});

/*router.post('/', (req, res) => {
    let nome = req.body.nome;

    let query = `delete from users where nome = ${nome}`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            console.log("Funcionou");
        }
    });
});
  

router.get('/', (err, result, fields) => {
    let capture = `select * from users`;

    db.capture(capture, function(error, data){
        if(error){
            throw error;
        }else{
            console.log(data);
        }
    });
});*/

module.exports = router;