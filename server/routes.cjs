const express = require('express')
const EntryController = require('./controllers/EntryController.cjs')

const router = express.Router()

//web routes here

//if someone retreives data from http://localhost:5173/entries, run the "index function from EntryController"
router.get('/entries', EntryController.index)

//if someone sends data to http://localhost:5173/entries, run the "index function from EntryController"

router.post('/entries', EntryController.store)

//if someone retreives data from http://localhost:5173, run the "index function from EntryController"
router.patch('/entries/:entry', EntryController.update)

//if someone retreives data from http://localhost:5173, run the "index function from EntryController"
router.delete('/entries/:entry', EntryController.destroy)


module.exports = router