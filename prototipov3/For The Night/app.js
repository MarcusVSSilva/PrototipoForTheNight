const express = require('express');
const app = express();
const db = require('./models/db');
const bodyParser = require("body-parser");
const session = require('express-session');
var path = require('path');
const { response } = require('express');
const req = require('express/lib/request');

app.use(session({secret: 'sdfsdfew3'}));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/js'));
app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

//Rotas
app.use('/cadastro', require('./Routes/cadastro'));
app.use('/estoque', require('./Routes/estoque'));
app.use('/fornecedores', require('./Routes/fornecedores'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'));

app.listen(8080, ()=> {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});