const Message = require('../models/message')
const mongoose = require('mongoose')

const getMessages = async (req, res) => {
	const messages = await Message.find({}).sort({ createdAt: -1 })
	res.status(200).json({ messages })
}

const getMessage = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(400).json({ error: 'Not a valid Id' })
	const message = await Message.findById(id)
	if (!message) return res.status(400).json({ error: 'No document' })
	res.status(200).json({ message })
}

const addMessage = async (req, res) => {
	// const {sender, recepient, title, content} = req.body
	try {
		const message = await Message.create({ ...req.body })
		res.status(200).json(message)
	} catch (error) {
		console.log(error)
		res.status(400).json({ error })
	}
}

const deleteMessage = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({ error: 'Not a valid Id' })
	const message = await Message.findOneAndDelete({ _id: id })
	if (!message) return res.status(400).json({ error: 'No such Id' })
	res.status(200).json({ message })
}

const updateMessage = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({ error: 'Not a valid Id' })
	const message = await Message.findOneAndUpdate({ _id: id }, { ...req.body })
	if (!message) return res.status(400).json({ error: 'No such Id' })
	const updatedMessage = await Message.findById(id)
	res.status(200).json({ message, updatedMessage })
}

module.exports = {
	getMessages,
	getMessage,
	addMessage,
	deleteMessage,
	updateMessage,
}
