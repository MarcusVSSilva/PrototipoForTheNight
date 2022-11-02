const express = require('express');
const db = require('../models/connection');
const router = express.Router();

const resultsPerPage = 30;

router.get('/', (req, res) => {
    let sql = 'select * from estacionamento';
    db.query(sql, (err, result) => {
        if(err) throw err;
        const numOfResults = result.length;
        const numberOfPages = Math.ceil(numOfResults / resultsPerPage);
        let page = req.query.page ? Number(req.query.page) : 1;
        if(page > numberOfPages){
            res.redirect('/?page='+encodeURIComponent(numberOfPages));
        }else if(page < 1){
            res.redirect('/?page='+encodeURIComponent('1'));
        }
        //Determine the SQL LIMIT starting number
        const startingLimit = (page - 1) * resultsPerPage;
        //Get the relevant number of POSTS for this starting page
        sql = `select * from estacionamento limit ${startingLimit},${resultsPerPage}`;
        db.query(sql, (err, result)=>{
            if(err) throw err;
            let iterator = (page - 5) < 1 ? 1 : page - 5;
            let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + (numberOfPages - page);
            if(endingLink < (page + 4)){
                iterator -= (page + 4) - numberOfPages;
            }
            res.render('estacionamento', {data: result, page, iterator, endingLink, numberOfPages});
        });
    });
});

router.put("/", (req, res) => {
    let id_vaga = req.body.vaga;
    let vaga_disponivel = req.body.vaga_disponivel;
    let placa_veiculo = req.body.placa_veiculo;

    let query = `update estacionamento set vaga_disponivel = ${vaga_disponivel}, placa_veiculo = "${placa_veiculo}" where id_vaga = ${id_vaga}`; 
    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.render('admin');
        }
    });
});

module.exports = router;