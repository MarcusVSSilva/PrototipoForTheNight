const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const db = require('../models/db');

router.get("/", (req, res) => {
    res.render('../views/inicio.html'); 
});

module.exports = router;