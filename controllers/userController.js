const User = require('../models/user')

const userSignIn = async (req, res) => {
	res.json({ message: 'user sign in' })
}
const userSignUp = async (req, res) => {
	res.json({ message: 'user sign up' })
}

module.exports = {
	userSignIn,
	userSignUp,
}
