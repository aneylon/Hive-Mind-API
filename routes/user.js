const express = require('express')
const router = express.Router()

const { userSignIn, userSignUp } = require('../controllers/userController')

const loggingMiddleware = require('../middleware/logger')

router.use(loggingMiddleware)

router.post('/signin', userSignIn)

router.post('/signup', userSignUp)

// get 1
// get list
// update

module.exports = router
