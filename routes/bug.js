const express = require('express')
const {
	getBugs,
	getBug,
	addBug,
	deleteBug,
	updateBug,
} = require('../controllers/bugController')

const router = express.Router()

// add auth middlewear

router.get('/', getBugs)

router.get('/:id', getBug)

router.post('/', addBug)

router.delete('/:id', deleteBug)

router.patch('/:id', updateBug)

module.exports = router
