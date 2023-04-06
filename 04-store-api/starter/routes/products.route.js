const express = require('express')
const router = express.Router()
const url = '/api/v1/products'
const
    {
        getAllProducts,
        getAllProductStatic,
        addNewProducts,
        updateProducts,
        deleteProducts
    } = require('../controllers/products.controller')

router.route('/').get(getAllProductStatic).post(addNewProducts)
router.route('/:id').patch(updateProducts).delete(deleteProducts)
router.route('/search').get(getAllProducts)





module.exports = [url, router]