const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weaponSchema = new Schema({
	faction: {
		type: String,
		required: true,
	},
	move: {
    type: Number,
    required: true
  },
  toughness: {
    type: Number,
    required: true
  },
  wounds: {
    type: Number,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  weapons: [
    weaponType: { type: String, required: true},
    range: {type: Number, required: true},
    attacks: {type: Number, required: true},
    strength: {type: Number, required: true},
    damage: {type: Number, required: true}
  ],
  runemarks: [
    runemark: {type: String, required: true}
  ]
},{ timestamps: true})
 
module.exports = mongoose.model('Weapon', weaponSchema)
