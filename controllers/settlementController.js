const Settlement = require('../models/settlement')
const mongoose = require('mongoose')

const getSettlements = async (req, res) => {
	const Settlements = await Settlement.find({}).sort({ createdAt: -1 })
	res.status(200).json({ Settlements })
}

const getSettlement = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(400).json({ error: 'Not a valid Id' })
	const Settlement = await Settlement.findById(id)
	if (!Settlement) return res.status(400).json({ error: 'No document' })
	res.status(200).json({ Settlement })
}

const addSettlement = async (req, res) => {
	const newSettlement = { ...req.body }
	console.log(newSettlement)
	try {
		const settlement = await Settlement.create(newSettlement)
		res.status(200).json(settlement)
	} catch (error) {
		console.log(error)
		res.status(400).json({ error })
	}
}

const deleteSettlement = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({ error: 'Not a valid Id' })
	const Settlement = await Settlement.findOneAndDelete({ _id: id })
	if (!Settlement) return res.status(400).json({ error: 'No such Id' })

	res.status(200).json({ Settlement })
}

const updateSettlement = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({ error: 'Not a valid Id' })
	const Settlement = await Settlement.findOneAndUpdate(
		{ _id: id },
		{ ...req.body }
	)
	if (!Settlement) return res.status(400).json({ error: 'No such Id' })
	const updatedSettlement = await Settlement.findById(id)
	res.status(200).json({ Settlement, updatedSettlement })
}

module.exports = {
	getSettlements,
	getSettlement,
	addSettlement,
	deleteSettlement,
	updateSettlement,
}
