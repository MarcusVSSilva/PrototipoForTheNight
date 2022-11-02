const express = require('express');
const db = require('../models/connection');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('../views/contato.ejs'); 
});

module.exports = router;