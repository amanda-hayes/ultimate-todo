const { Schema, model } = require("mongoose");

const taskModel = Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  completed: { type: Boolean, required: true, default: false },
});

module.exports = model("Task", taskModel);
