const { query } = require('express');
const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const db = require('../models/db');
const bcrypt = require('bcrypt');

router.get("/", (req, res, next) => {
    res.render('../views/login.html', {title: 'Express', session : req.session}); 
});

router.post("/", (req, res, next) =>{
    let email = req.body.email;
    let senha = req.body.senha;

    if(email && senha){
        let query = `select * from usuarios where email = "${email}"`;

        db.query(query, function(error, data){
            if(data.length > 0){
                for(let i = 0; i < data.length; i++){
                    if(data[i].senha == senha){
                        req.session.id_usuario = data[i].id_usuario;
                        res.redirect("/views/inicio.html");
                    }else{
                        res.send("Senha incorreta");
                    }
                }
            }else{
                res.send("Email incorreto");
            }
            res.end();
        });

    }else{
        res.send("Por favor, coloque o email e a senha corretamente.");
        res.end();
    }
});

module.exports = router;