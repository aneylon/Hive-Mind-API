const mongoose = require('mongoose')
const Schema = mongoose.Schema

const settlementSchema = new Schema(
	{
		user: {
			type: String, //mongoose.ObjectId,
			required: true,
		},
		gangName: {
			type: String,
			required: true,
		},
		settlementName: {
			type: String,
			required: true,
		},
		gangRating: {
			type: Number,
			required: true,
		},
		location: {
			defence: {
				type: Number,
				required: true,
			},
			resources: {
				type: Number,
				required: true,
			},
			toxicity: {
				type: Number,
				required: true,
			},
		},
		structures: {
			supply: {
				type: Number,
				required: true,
			},
			building: {
				type: Number,
				required: true,
			},
			defence: {
				type: Number,
				required: true,
			},
		},
		materials: {
			power: {
				type: Number,
				required: true,
			},
			sustenance: {
				type: Number,
				required: true,
			},
			salvage: {
				type: Number,
				required: true,
			},
		},
		structureList: [
			{
				structure: { type: String, required: true },
				type: { type: String, required: true },
				benefits: { type: String, required: true },
			},
		],
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Settlement', settlementSchema)
