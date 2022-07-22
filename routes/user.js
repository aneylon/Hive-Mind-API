const express = require('express')
const router = express.Router()

const loggingMiddleware = require('../middleware/logger')

router.use(loggingMiddleware)

router.post('/signin', (req, res) => {
	res.send('sign in')
})

router.post('/signup', (req, res) => {
	res.send('sign up')
})

// get 1
// get list
// update

module.exports = router
