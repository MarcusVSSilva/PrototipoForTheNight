const express = require('express');
const app = express();
const bodyParser = require("body-parser");
var path = require('path');
const methodOverride = require('method-override');

app.use(express.static('public'));
app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Rotas usuário
app.use('/inicio', require('./Routes/inicio'));
app.use('/eventos', require('./Routes/eventos'));
app.use('/comprar', require('./Routes/comprar'));
app.use('/contato', require('./Routes/contato'));
app.use('/cadastro', require('./Routes/cadastro'));
app.use('/login', require('./Routes/login'));

// Rotas admin
app.use('/admin', require('./Routes/admin'));
app.use('/fornecedores', require('./Routes/fornecedores'));
app.use('/estoque', require('./Routes/estoque'));
app.use('/evento', require('./Routes/evento'));
app.use('/bilheteria', require('./Routes/bilheteria'));
app.use('/produtos', require('./Routes/produtos'));
app.use('/estacionamento', require('./Routes/estacionamento'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor iniciado na porta 3000");
});

module.exports = app;