const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const { authentication, isAdmin } = require('../middlewares/authentication')


router.post('/', authentication, isAdmin, ProductController.create)
router.get('/', ProductController.getAll)
router.get('/id/:_id', ProductController.getById)
router.get('/name/:name', ProductController.getProductsByName)
router.delete('/:_id', authentication, isAdmin, ProductController.delete)
router.put('/:_id', authentication, isAdmin, ProductController.update)


module.exports = router