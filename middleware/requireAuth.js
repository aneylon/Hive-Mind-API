const jwt = require('jsonwebtoken')
const User = require('../models/user')
const secret = process.env.SECRET

const requireAuth = async (req, res, next) => {
	const { authorization } = req.headers

	if (!authorization) {
		return res.status(401).json({ error: 'Authorization required' })
	}
	const token = authorization.split(' ')[1]

	try {
		const { _id } = jwt.verify(token, secret)
		const user = await User.findOne({ _id: _id }).select('_id')
		req.user = user
		next()
	} catch (error) {
		res.status(401).json({ error: 'Request not authorized' })
	}
}

module.exports = requireAuth
