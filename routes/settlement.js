const express = require('express')
const {
	getSettlements,
	getSettlement,
	addSettlement,
	deleteSettlement,
	updateSettlement,
} = require('../controllers/settlementController')

const router = express.Router()

// add auth middlewear

router.get('/', getSettlements)

router.get('/:id', getSettlement)

router.post('/', addSettlement)

router.delete('/:id', deleteSettlement)

router.patch('/:id', updateSettlement)

module.exports = router
