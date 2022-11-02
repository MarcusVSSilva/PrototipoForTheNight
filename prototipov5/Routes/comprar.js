const express = require('express');
const db = require('../models/connection');
const router = express.Router();

router.get('/', (req, res) => {
    let sql = 'select * from eventos';

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('comprar', { data: result});
    });
});

router.put("/", (req, res) => {
    let id = localStorage.getItem('id_evento');

    let query = `update eventos set quantidade_ingressos = (quantidade_ingressos -1) where id_eventos = ${id}`; 
    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.render('admin');
        }
    });
});

module.exports = router;