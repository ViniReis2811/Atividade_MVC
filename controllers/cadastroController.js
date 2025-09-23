const cadastroModel = require('../models/cadastroModel')

const cadastro = new cadastroModel()
const cadastrado = cadastro.isRegistered()

exports.getIsRegistered = ((req,res) => {
    res.render("CadastroView", {cadastrado : cadastrado});
});