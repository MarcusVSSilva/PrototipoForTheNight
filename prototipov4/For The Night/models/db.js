const Sequelize = require('sequelize');

const sequelize = new Sequelize("ftn_db", "Eik", "Eik981934478", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso");
})

module.exports = sequelize;