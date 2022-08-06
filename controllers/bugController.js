const Bug = require('../models/bug')
const mongoose = require('mongoose')

const getBugs = async (req, res) => {
	const bugs = await Bug.find({}).sort({ createdAt: -1 })
	res.status(200).json({ bugs })
}

const getBug = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(400).json({ error: 'Not a valid Id' })
	const bug = await Bug.findById(id)
	if (!bug) return res.status(400).json({ error: 'No document' })
	res.status(200).json({ bug })
}

const addBug = async (req, res) => {
	const { user, description } = req.body
	try {
		const bug = await Bug.create({ user, description })
		res.status(200).json(bug)
	} catch (error) {
		console.log(error)
		res.status(400).json({ error })
	}
}

const deleteBug = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({ error: 'Not a valid Id' })
	const bug = await Bug.findOneAndDelete({ _id: id })
	if (!bug) return res.status(400).json({ error: 'No such Id' })

	res.status(200).json({ bug })
}

const updateBug = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({ error: 'Not a valid Id' })
	const bug = await Bug.findOneAndUpdate({ _id: id }, { ...req.body })
	if (!bug) return res.status(400).json({ error: 'No such Id' })
	const updatedBug = await Bug.findById(id)
	res.status(200).json({ bug, updatedBug })
}

module.exports = {
	getBugs,
	getBug,
	addBug,
	deleteBug,
	updateBug,
}
