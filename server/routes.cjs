const express = require('express')
const StoreController = require('./controllers/StoreController.cjs')

const router = express.Router()

//web routes here

//categories routes
router.get('/categories', StoreController.indexCat)
router.post('/categories', StoreController.storeCat)
router.patch('/categories/:id', StoreController.updateCat)
router.delete('/categories/:id', StoreController.destroyCat)

//items routes
router.get('/items', StoreController.indexItem)
router.post('/items', StoreController.storeItem)
router.patch('/items/:id', StoreController.updateItem)
router.delete('/items/:id', StoreController.destroyItem)

//storefront route

router.get('storefront', StoreController.getStorefront)

module.exports = router