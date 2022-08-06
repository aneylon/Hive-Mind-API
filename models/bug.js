const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bugSchema = new Schema(
	{
		user: {
			type: String, //mongoose.ObjectId,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('bug', bugSchema)
