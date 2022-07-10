const logger = function (req, res, next) {
	console.log('log it in the middle')
	next()
}

module.exports = logger
