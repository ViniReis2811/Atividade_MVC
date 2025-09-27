const express = require('express')
const router = express.Router()

const cadastroController = require('../controllers/cadastroController')

router.get('/', cadastroController.Get);
router.post('/', cadastroController.Save);
router.get('/delete/:id', cadastroController.Delete);
router.get('/lista', cadastroController.getVehicles);

module.exports = router