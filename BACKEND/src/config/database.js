const mongoose = require('mongoose');

// CONFIGURANDO BANCO DE DADOS LOCAL \\
const url = 'mongodb://localhost:27017/todo';
mongoose.connect(url, { useNewUrlParser: true });

// EXPORTANDO A CONEXAO \\
module.exports = mongoose;