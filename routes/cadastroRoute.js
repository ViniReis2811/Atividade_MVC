const express = require('express')
const router = express.Router()

const cadastroController = require('../controllers/cadastroController')

router.get('/form', cadastroController.getIsRegistered);

module.exports = router