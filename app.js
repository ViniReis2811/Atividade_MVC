const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const cadastroRoute = require('./routes/cadastroRoute')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cadastroRoute)

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname));

app.listen(3000, function(){
    console.log('Projeto rodando na porta 3000');
});