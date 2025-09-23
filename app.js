const express = require('express')
const app = express()

const cadastroRoute = require('./routes/cadastroRoute')

app.use(cadastroRoute)

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000, function(){
    console.log('Projeto rodando na porta 3000');
});