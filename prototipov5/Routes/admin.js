const express = require('express');
const db = require('../models/connection');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../views/admin.ejs'); 
});

router.get('/clientes', (req, res) => {
    let sql = 'select * from usuarios';

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;