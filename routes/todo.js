const express = require('express')
const router = express.Router()
const loggingMiddleware = require('../middleware/logger')
const requireAuth = require('../middleware/requireAuth')
const Todo = require('../models/todo')

router.use(loggingMiddleware)

router.use(requireAuth)

router.get('/', (req, res) => {
	console.log('user', req.user)
	console.log('getting all todos')
	Todo.find().exec((err, todos) => {
		if (err) return res.json({ success: false, error: err })
		return res.json({ success: true, data: todos })
	})
})

router.get('/:id', (req, res) => {
	console.log(`getting todo : ${req.params}`)
	let id = req.params.id
	Post.findById(id, (err, todo) => {
		if (err) return res.json({ success: false, error: err })
		return res.json({ success: true, data: todo })
	})
})

router.post('/add', (req, res) => {
	console.log(req.body)
	const newTodo = new Todo(req.body)
	newTodo.save((err, created) => {
		if (err) return res.status(400).json({ success: false, error: err })
		return res.status(200).json({ success: true, data: created })
	})
})

router.put('/:id', (req, res) => {
	console.log(`updating (create if does not exist) id: ${req.body}`)
	res.send(`update or create id: ${req.body.params}`)
})

router.patch('/:id', (req, res) => {
	console.log(`updating existing id: ${req.body}`)
	res.send(`update existing id : ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
	console.log(req.params)
	res.send(`delete todo: ${req.params.id}`)
})

module.exports = router
