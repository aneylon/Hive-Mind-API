let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TodoSchema = new Schema({
  content: { type: String, required: true },
  createdBy: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date, required: false },
  completed: { type: Boolean, required: true },
  completedBy: { type: Number, required: false },
});

TodoSchema.pre("save", (next) => {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model("todo", TodoSchema);
