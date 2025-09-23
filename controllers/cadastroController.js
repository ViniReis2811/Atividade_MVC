const cadastroModel = require('../models/cadastroModel')

const cadastro = new cadastroModel()
const cadastrado = cadastro.signIn()

exports.getSignIn = ((req,res) => {
    res.render("CadastroView", {cadastrado : cadastrado});
});