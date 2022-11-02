const express = require('express');
const db = require('../models/connection');
const router = express.Router();

const resultsPerPage = 30;

router.get('/', (req, res) => {
    let sql = 'select * from estoque';
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
        sql = `select * from estoque limit ${startingLimit},${resultsPerPage}`;
        db.query(sql, (err, result)=>{
            if(err) throw err;
            let iterator = (page - 5) < 1 ? 1 : page - 5;
            let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + (numberOfPages - page);
            if(endingLink < (page + 4)){
                iterator -= (page + 4) - numberOfPages;
            }
            res.render('estoque', {data: result, page, iterator, endingLink, numberOfPages});
        });
    });
});

router.post("/", (req, res) => {
    let nome = req.body.nome_produto;
    let qtd_produto = req.body.qtd_produto;
    let unidade_medida = req.body.unidade_medida;
    let valor_compra = req.body.valor_compra;
    let categoria = req.body.categoria;
    

    let query = `insert into estoque (nome, quantidade, unidade_medida, valor_compra, categoria, data_entrada) values ("${nome}", "${qtd_produto}", "${unidade_medida}", "${valor_compra}", "${categoria}", SYSDATE())`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.render('admin');
        }
    });

});

module.exports = router;