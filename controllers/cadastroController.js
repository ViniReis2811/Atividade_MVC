const cadastroModel = require('../models/cadastroModel')

const cadastro = new cadastroModel()

exports.Get = (req,res) => {
    res.render("cadastroView", {saved:false})
};

exports.Save = (req,res) => {
    var result = cadastro.signIn(req.body.name)
    res.render("cadastroView", {cadastro: result})
};

exports.getVehicles = (req,res) => {
    var result = cadastro.ListAll()
    res.render("listView", {vehicles: result});
};

exports.Delete = (req,res) => {
    let {id} = req.params;
    cadastro.Delete(id);
    let result = cadastro.ListAll();
    res.render("listView", {vehicles: result})
}